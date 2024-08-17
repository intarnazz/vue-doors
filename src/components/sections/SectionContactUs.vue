<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="contacts">
    <LayoutWrapper class="contacts__wrapper">
      <h2 class="source">Свяжитесь с нами и найдите идеальное решение</h2>
      <p class="sans">Свяжитесь с нами, чтобы узнать больше и получить консультацию</p>
      <button class="button">Свяжитесь с нами</button>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped>
.contacts
  text-align: center
  background-color: $mainColor
  padding: 2.9rem 0
  display: flex
  justify-content: center
  align-items: center
  &__wrapper
    display: flex
    flex-direction: column
    align-items: center
    gap: 2rem
</style>
