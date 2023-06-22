<script setup>
import {ref, reactive} from "vue"
const text = ref("Change, Me!")
const checkBox = ref(false)
const animals = ref([])
</script>

<template>
  <h2>Put some text in here:</h2>
  <input type="text" v-model="text" /> {{ text }}

  <h2>Check the box:</h2>
  <input type="checkbox" id="checkBox" v-model="checkBox"/>
  <label for="checkBox">Checked? {{ checkBox }}</label>

  <h2>Select one of the followong:</h2>
  <input type="checkbox" id="orangutan" value="orangutan" v-model="animals"/>
  <label for="orangutan">Orangutan</label>
  <input type="checkbox" id="monkey" value="monkey" v-model="animals"/>
  <label for="monkey">Monkety</label> 
  <input type="checkbox" id="shark" value="shark" v-model="animals"/> 
  <label for="shark">Shark</label>
  <p>{{ animals }}</p>

</template>

<style scoped>

</style>
