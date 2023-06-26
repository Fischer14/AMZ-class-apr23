<script setup>
import { ref } from "vue";

const deportes = ref([
  {
    id: 1,
    title: 'Tenis',
    description: 'El deporte que más he practicado',
    experience: 'Práctico y compito desde los 4 años'
  },
  {
    id: 2,
    title: 'Futbol',
    description: 'El deporte que mejor se me dá',
    experience: 'Practico desde pequeña pero por lesiones no he podido continuar'
  },
  {
    id: 3,
    title: 'Golf',
    description: 'El deporte que más practico al día de hoy',
    experience: 'Es una realción de amor odio con el Golf.'
  }
]);

</script>

<template>
    <ul class="list-music-band">
        <li v-for="deportes in deporte" :key="deportes.id">
        <div>
            <h5>Deporte</h5>
            <h2>{{ deportes.title }}</h2>
        </div>
        <div>
            <h5>Descripción</h5>
            <h3>{{ deportes.description  }}</h3>
        </div>
        <div>
            <h5>Experiencia</h5>
            <h4>{{ deportes.experience }}</h4>
        </div>
        </li>
    </ul>

</template>

<style scoped>
</style>