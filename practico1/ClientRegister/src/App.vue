<script setup>
import ClientInput from './components/clientInput.vue';
</script>

<template>
    <head>
      <meta charset="UTF-8" />
      <title>Vue con Bootstrap</title>

      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </head>
  <main class="background">
    <ClientInput/>
  </main>
</template>

<style scoped>
.background {
  background-image: url('https://wallpapercave.com/wp/wp3152211.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

/* Capa difusa encima del fondo */
.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px); /* Aplica blur */
  background-color: rgba(255, 255, 255, 0.3); /* Opcional: da un efecto de neblina */
  z-index: 1;
}

/* Para que el contenido quede por encima del blur */
.background > * {
  position: relative;
  z-index: 2;
}
</style>
