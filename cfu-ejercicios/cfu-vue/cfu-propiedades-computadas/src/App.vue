<script setup>
  import {computed, ref} from 'vue';
  const firstName = ref('Romy');
  const lastName = ref('Fischer'); 
  const fullName = computed(() => firstName.value + ' ' + lastName.value);
</script>

<template>
  <h1>My name is: {{ fullName }}</h1>
</template>

<style scoped>

</style>
