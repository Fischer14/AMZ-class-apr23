<template>
    <button class="btn" :style="{backgroundColor:bgColor}">{{name}}</button>
</template>

<script setup>
  const props = defineProps({
    name : String,
    bgColor: String
  })
</script>

<style scoped>

</style>