<script setup>
import { ref } from "vue";
import Modal from './components/Modal.vue';
const modalHidden = ref(false);
const showModal = () => {
  modalHidden.value = true;
};
const closeModal = () => {
modalHidden.value = false;
};
</script>

<template>
<div class="container">
    <button @click="showModal">Show Modal</button>
    <Modal v-show="modalHidden" @close="closeModal" />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
.modal {
  height: 400px;
  width: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
  background: lightgray;
}     
</style>
