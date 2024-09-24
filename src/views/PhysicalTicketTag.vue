<template>
    <div class="bg-gray-50 px-8">
        <h1 class="text-3xl font-bold text-center mt-8">Scan Ticket</h1>
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <qrcode-stream :key="scannerKey" @init="onInit" @decode="onDecode" :torch="torch"></qrcode-stream>

        <!-- Modal -->
        <div v-if="showModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
                <p class="text-lg font-bold mb-4">{{ modalTitle }}</p>
                <p class="mb-4">{{ responseMessage }}</p>
                <button @click="dismissModal" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Okay</button>
            </div>
        </div>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Importing the useRouter hook

export default {
    data() {
        return {
            error: '',
            decodedString: '',
            torch: false,
            showModal: false,
            modalTitle: 'Ticket Verification',
            responseMessage: '',
            scannerKey: 0,
        };
    },
    components: {
        QrcodeStream
    },
    setup() {
        const router = useRouter(); // Get the router instance

        return {
            router
        };
    },
    methods: {
        async onInit(promise) {
            try {
                console.log('Camera initialized');
                const { capabilities } = await promise;
            } catch (error) {
                this.handleError(error);
            }
        },
        onDecode(decodedString) {
            console.log('Decoded string:', decodedString);
            this.decodedString = decodedString;
            this.verifyTicket();
        },
        async verifyTicket() {
            try {
                const onlineTicketId = localStorage.getItem('onlineTicketId');
                const data = {
                    onlineTicketId: onlineTicketId,
                    physicalTicketId: this.decodedString
                };
                const url = 'https://api.countersbd.com/api/v1/ticket/tag-physical-ticket';
                const response = await axios.post(url, data);

                // Check HTTP status code
                if (response.status === 200) {
                    this.responseMessage = response.data.message;
                } else {
                    this.responseMessage = response.data.message || 'Unexpected error occurred';
                }
            } catch (error) {
                console.error('Error verifying ticket:', error);
                this.responseMessage = error.response?.data?.message || 'An error occurred while verifying the ticket';
            } finally {
                this.showModal = true; // Show modal regardless of success or error
            }
        },
        dismissModal() {
            this.resetState();
            this.startScanning();
            this.router.push('/options'); // Redirect to /options after dismissing modal
        },
        startScanning() {
            this.scannerKey += 1; // Increment to re-render QrcodeStream
            this.decodedString = ''; // Reset decoded string
            this.torch = false; // Optionally reset torch
        },
        resetState() {
            this.showModal = false;
            this.responseMessage = '';
            this.error = '';
        },
        handleError(error) {
            switch (error.name) {
                case 'NotAllowedError':
                    this.error = 'User denied camera access permission';
                    break;
                case 'NotFoundError':
                    this.error = 'No suitable camera device installed';
                    break;
                case 'NotSupportedError':
                    this.error = 'Page is not served over HTTPS (or localhost)';
                    break;
                case 'NotReadableError':
                    this.error = 'Camera is already in use';
                    break;
                case 'OverconstrainedError':
                    this.error = 'Requested front camera not available';
                    break;
                case 'StreamApiNotSupportedError':
                    this.error = 'Browser lacks necessary features';
                    break;
                default:
                    this.error = 'Failed to initialize camera';
                    break;
            }
        },
    }
};
</script>

<style scoped>
.fixed {
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-white {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
}
</style>
