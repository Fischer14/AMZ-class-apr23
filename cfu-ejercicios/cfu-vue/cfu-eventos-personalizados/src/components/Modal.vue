<template>
  <div class="modal">
    <button @click="$emit('close')">Click to close</button>
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style scoped>

</style>