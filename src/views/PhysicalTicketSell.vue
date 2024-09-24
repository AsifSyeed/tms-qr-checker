<template>
    <div class="flex flex-col items-center bg-gray-100 px-4 min-h-screen pt-[100px]">
        <!-- Logo Image -->

        <!-- First Input Field (Event ID) -->
        <input 
            type="text" 
            v-model="userName"
            placeholder="Enter User Name"
            class="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-md"
        />

        <!-- First Input Field (Event ID) -->
        <input 
            type="text" 
            v-model="userPhoneNumber"
            placeholder="Enter User Phone Number"
            class="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-md"
        />

        <!-- Second Input Field (Second Field) -->
        <input 
            type="text" 
            v-model="userEmailId"
            placeholder="Enter User Email ID"
            class="px-4 py-2 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-md"
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
    name: "EventVerifyWithTwoFields",
    data() {
        return {
            userPhoneNumber: '',       // First input field (Event ID)
            userEmailId: '',    // Second input field (Additional info)
            userName: ''    // Second input field (Additional info)
        };
    },
    methods: {
        async handleSubmit() {
            try {
                // Prepare the data to be sent to the API
                const data = {
                    userPhoneNumber: this.userEmailId || null,      // Pass eventId or null if empty
                    userEmailId: this.userEmailId || null, // Pass secondField or null if empty
                    userName: this.userName || null // Pass secondField or null if empty
                };

                console.log(data);
                // send data to 'scan-physical-ticket' page
                this.$router.push({ name: 'ScanPhysicalTicket', params: { data: data } });

                // // Call the API (update the endpoint as needed)
                // const response = await axios.get(`http://localhost:8080/api/v1/event/verify-with-extra`, {
                //     params: data
                // });

                // if (response.status === 200) {
                //     // Cache the input data in local storage to retrieve later if necessary
                //     localStorage.setItem('eventId', this.eventId);
                //     localStorage.setItem('secondField', this.secondField);
                //     // Redirect to ScanOptions.vue on successful response
                //     this.$router.push('/options');
                // } else {
                //     console.error("Unexpected response:", response);  // Handle unexpected response
                // }
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
