<script setup>
import { reactive } from "vue";

let introMe = reactive ({
    name: "Romy Fischer",
    age: 27,
    food: ['Ceviche', 'Raclette', 'Pasta']
});

</script>

<template>
   <div>
        <div>
            El resultado de 2 + 2 es: {{ 2 + 2 }}
        </div>
        <div>
            <p>Nombre: {{ introMe.name }}</p>
            <p>Edad: {{ introMe.age }}</p>
            <p>Comida favorita:</p>
            <ul>
                <li v-for="food in introMe.food" :key="food">{{ food }}</li>
            </ul>
        </div>
    </div>
    
</template>

<style scoped>
</style>