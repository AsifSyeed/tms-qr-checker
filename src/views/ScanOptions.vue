<template>
    <div class="flex flex-col items-center bg-gray-100 min-h-screen">
        <!-- Header at the top -->
        <h1 class="text-2xl mt-6 mb-6">Scan Options</h1>

        <!-- Container for buttons to center them vertically -->
        <div class="flex-grow flex flex-col justify-center">
            <button 
                @click="verifyTicket" 
                class="px-6 py-2 text-white rounded-lg mb-4 hover:bg-red-700" 
                style="background-color: #D82128;"
            >
                Verify Event Ticket
            </button>
            <button class="px-6 py-2 text-white rounded-lg mb-4 hover:bg-red-700" style="background-color: #D82128;">
                Online Ticket Verify for Physical Copy
            </button>
            <button class="px-6 py-2 text-white rounded-lg hover:bg-red-700" style="background-color: #D82128;">
                Sell Physical Ticket
            </button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'; // Importing the useRouter hook

export default {
    name: "ScanOptions",
    setup() {
        const router = useRouter(); // Get the router instance

        // Method to handle ticket verification
        const verifyTicket = async () => {
            // Perform your ticket verification logic here
            // After verification, redirect to Home
            try {
                // Call your verification logic here
                console.log("Verifying ticket...");
                // Redirect to the Home view after verification
                router.push('/home'); // Redirect to the Home view
            } catch (error) {
                console.error("Error verifying ticket:", error);
            }
        };

        return {
            verifyTicket
        };
    }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
