<template>
  <article class=card>
    <div class=titulo>
        <slot name="title"></slot>
    </div>
    <div class="descripcion">
        <slot name="description"></slot>
    </div>
  </article>
</template>

<script setup>

</script>

<style scoped>
.card {
  width: 20rem;
  background: lightgray;
}
.titulo {
  color: blue;
}

.descripcion {
  color: red;
}
</style>

