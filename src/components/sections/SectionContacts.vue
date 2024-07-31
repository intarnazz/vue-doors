<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="contacts">
    <LayoutWrapper class="flex box-x contacts__wrapper">
      <h2 class="source">Find your next designer today</h2>
      <p class="sans">
        Get inspired by the work of millions of top-rated designers & agencies around the world.
      </p>
      <button class="button">button</button>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped>
.contacts
  background-color: $mainColor
  padding: 2.9rem 0
  &__wrapper
    display: flex
    flex-direction: column
    align-items: center
    gap: 2rem
</style>
