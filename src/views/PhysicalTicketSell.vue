<template>
    <div class="flex flex-col items-center bg-gray-100 px-4 min-h-screen pt-[100px]">
        <!-- Logo Image -->
        <img src="/Logo_big.png" alt="Logo" class="w-full h-auto mb-6 max-w-xs mt-4" />

        <!-- Input Field -->
        <input 
            type="text" 
            v-model="eventId"
            placeholder="Enter Event ID"
            class="px-4 py-2 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-md"
            style="margin-top: 200px;" 
        />

        <!-- Submit Button -->
        <button 
            @click="handleSubmit"
            class="px-6 py-2 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            style="background-color: #D82128;"
        >
            Submit
        </button>
    </div>
</template>

<script>
import axios from 'axios';  // Importing axios

export default {
    name: "EventVerify",
    data() {
        return {
            eventId: ''  // Data property to hold the input value
        };
    },
    methods: {
        async handleSubmit() {
            try {
                // Update the API endpoint here
                const response = await axios.get(`https://api.countersbd.com/api/v1/event/verify-for-scanner`, {
                    params: { eventId: this.eventId || null }  // Pass eventId or null if empty
                });

                if (response.status === 200) {
                    // cache the event ID in local storage to retrieve it later
                    localStorage.setItem('eventId', this.eventId);
                    // Redirect to ScanOptions.vue on successful response
                    this.$router.push('/options'); // Updated to use path
                } else {
                    console.error("Unexpected response:", response);  // Handle unexpected response
                }
            } catch (error) {
                console.error("Error fetching data:", error);  // Handle errors
            }
        }
    }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
