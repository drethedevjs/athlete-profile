<script setup lang="ts">
import Home from './views/Home.vue'
import NewProfile from './views/NewProfile.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="flex-grow-1">
    <Home />
  </main>
  <Footer />
</template>

<style scoped>

</style>
