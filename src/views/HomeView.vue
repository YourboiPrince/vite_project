<script setup>
// import TheWelcome from '../components/TheWelcome.vue';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore()

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
