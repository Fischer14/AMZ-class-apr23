<template>
  <div>
    <input v-model="inputValue" type="text" placeholder="Enter text here">
    <button @click="resetInput">Reset</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
  
  const inputValue = ref('')
    watch(inputValue, (newValue) => {
      console.log(`New value: ${newValue}`)
      alert(`New value: ${newValue}`)
      return { inputValue }
    })
</script>

<style>

</style>