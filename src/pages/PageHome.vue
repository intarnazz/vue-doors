<script setup>
import { onMounted, ref } from 'vue'

// onMounted(async () => {
//   await init()
// })
</script>

<template>
  <main v-if="!loding" class="main">
    <h1>The world’s destination for design</h1>
    <h2>
      Get inspired by the work of millions of top-rated designers & agencies around the world.
    </h2>
  </main>
</template>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: column
  align-items: center
</style>
