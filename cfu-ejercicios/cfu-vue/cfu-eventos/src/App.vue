<script setup>
const messageAlertEvent = () => {
    setTimeout( () => {
      alert("Here is you message")
    },1000)
};
</script>

<template>
  <button @click="messageAlertEvent">Click for alert message</button>
</template>

<style scoped>

</style>
