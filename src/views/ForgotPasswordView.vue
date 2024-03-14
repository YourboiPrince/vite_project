<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="submitForm">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="submit" value="Submit">
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      submitForm() {
        axios.post('http://127.0.0.1:8000/api/forgot-password', {
          email: this.email
        })
        .then(response => {
          console.log(response.data.message);
          // Optionally, show success message to the user
        })
        .catch(error => {
          console.error(error.response.data.message);
          // Optionally, show error message to the user
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  