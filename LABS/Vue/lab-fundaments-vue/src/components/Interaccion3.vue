<script setup>
import { ref } from 'vue';
const boolean = ref(true)
</script>

<template>
  <div>
    <p v-if="boolean">Este elemento se mostrará si boolean es true.</p>
    <p v-else>Este elemento no es visible.</p>
  </div>
</template>

<style scoped>
</style>