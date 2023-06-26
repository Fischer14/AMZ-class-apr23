<script setup>
import {ref} from "vue";
const array = ref ([1,2,3,4]);
</script>

<template>
  <ul v-for="item in array">
    <li> {{ item }}</li>
  </ul>
</template>

<style scoped></style>