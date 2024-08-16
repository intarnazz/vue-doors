<script setup>
import MainHeader from '@/layout/header/MainHeader.vue'
// import { useRoute } from 'vue-router'
// import { watchEffect } from 'vue'

// const route = useRoute()

// watchEffect(() => {
//   document.title = route.meta.title || 'Vue 3'
//   const description = route.meta.description
//   const metaDescription = document.querySelector('meta[name="description"]')
//   if (metaDescription) {
//     metaDescription.setAttribute('content', description || 'Default description')
//   }
// })
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<style lang="sass" scoped></style>
