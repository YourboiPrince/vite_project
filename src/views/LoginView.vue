<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Enter username" v-model="username">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="password" placeholder="Enter password" v-model="password">
        <input type="submit" value="Login">
      </form>
    </div>
  </template>
  
  <style scoped>
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh; /* Set the height to the full viewport height */
    }
  
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
    
  
    form {
      max-width: 300px;
      margin: 0 auto;
    }
  </style>
  