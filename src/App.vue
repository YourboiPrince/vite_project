<script setup>
import { ref } from "vue";

const count = ref(0);

console.log(count);

// function increment() {
//   count.value++;
// }
</script>

<template>
  <div>
    <div class="nav">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/about">About</RouterLink>
      <RouterLink class="nav-item" to="/services">Services</RouterLink>
      <RouterLink class="nav-item" to="/contact">Contact us</RouterLink>
      <RouterLink class="nav-item" to="/login">Login</RouterLink>
      <RouterLink class="nav-item" to="/signup">Signup</RouterLink>
    </div>
    <router-view></router-view>
    <!-- <h1>Counter App</h1>

    <button @click="increment">Increment</button>
    <p>{{ count }}</p> -->
  </div>
</template>

<style scoped>
  .nav {
    background-color: green;
    padding: 14px 28px;
  }

  .nav .nav-item {
    text-decoration: none;
    padding: 0px 28px;
    color: white;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
