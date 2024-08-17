<script setup>
// import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionContactUsMain from '@/components/sections/SectionContactUsMain.vue'
</script>

<template>
  <main v-if="!loding" class="main box-y">
    <!-- <LayoutWrapper class="flex box-y main__wrapper"> -->
    <SectionContactUsMain />
    <!-- </LayoutWrapper> -->
  </main>
</template>

<style lang="sass" scoped>
.main
  gap: 4.5rem
  justify-content: center
  align-items: center
  &__wrapper
    display: flex
    align-items: center
    gap: 4.5rem
</style>
