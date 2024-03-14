<template>
    <div>
      <h2>Reset Password</h2>
      <form @submit.prevent="resetPassword">
        <input type="password" placeholder="Enter new password" v-model="newPassword">
        <input type="password" placeholder="Confirm new password" v-model="confirmPassword">
        <input type="submit" value="Reset Password">
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPassword: '',
        confirmPassword: ''
      };
    },
    methods: {
      resetPassword() {
        // Add your reset password logic here
        if (this.newPassword !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        
        // Example: Send new password to the server
        // axios.post('/api/reset-password', { newPassword: this.newPassword })
        //   .then(response => {
        //     console.log(response.data);
        //     alert('Password reset successful!');
        //   })
        //   .catch(error => {
        //     console.error(error);
        //     alert('Password reset failed!');
        //   });
  
        // This is a placeholder for the actual reset password logic
        alert('Reset password logic would be implemented here.');
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #8a2be2; /* Purple color for the header */
    margin-bottom: 20px;
  }
  
  input {
    display: block;
    margin-bottom: 15px; /* Increased spacing between inputs */
    padding: 10px;
    border: 1px solid #8a2be2;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
  }
  
  input:focus {
    outline: none;
    border-color: #5a1a8a;
    box-shadow: 0 0 8px rgba(138, 43, 226, 0.5);
  }
  
  input[type="submit"] {
    background-color: #8a2be2;
    color: #fff;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #5a1a8a;
  }
  </style>
  