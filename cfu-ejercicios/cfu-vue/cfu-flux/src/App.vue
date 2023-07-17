<script setup>
  import {useCounterStore} from './stores/counter';
  const main = useCounterStore();
</script>

<template>
  <h1>Welcome {{ name }}</h1>
  <h3>{{ main }}</h3>
 
  <button @click="main.addOne">Add One</button>
  <button @click="main.doubleCount">Double</button>
  <button @click="main.minusOne">Minus One</button>
  <button @click="main.reset">Reset</button>
</template>

