<script setup>
import Card from './components/Card.vue'
let title = "Hi this is the title slot"
let description = "this is the description"
</script>

<template>
 <Card>
  <template #title>
    <h1>{{ title }}</h1>
  </template>
  <template #description>
    <p> {{ description }}</p>
  </template>
 </Card>
</template>

<style scoped>
:root {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
