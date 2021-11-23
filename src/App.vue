<script setup lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
</script>

<template>
  <div class="relative w-full h-full flex justify-center items-center font-alata text-gray-600">
    <Header />
    <Content />
  </div>
</template>

<style>
@font-face {
  font-family: 'Alata';
  src: local('Alata'),   url(./assets/fonts/Alata-Regular.ttf) format('truetype');
}

html, body, #app {
  height: 100%;
}

body {
  background-image: url(./assets/images/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 1.5rem;
}
</style>
