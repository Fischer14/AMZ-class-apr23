<script setup>
import { ref } from "vue";
const logIn = ref(false);

</script>

<template>
  <div>
    <button @click="logIn = true" v-if="!logIn">Log In</button>
    <button @click="logIn = false" v-else="logIn">Log Out</button>
  </div>
</template>

<style scoped></style>
