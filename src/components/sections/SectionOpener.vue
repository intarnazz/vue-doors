<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="opener">
    <p class="mark source">Более 3 миллионов дверей для вашего дома</p>
    <h1 class="source">Мир дверей для вашего дома</h1>
    <h2 class="sans">
      Откройте для себя разнообразие дверей и уникальных решений для вашего интерьера
    </h2>

    <RouterLink :to="{ name: 'contact' }" class="button">Свяжитесь с нами</RouterLink>
  </section>
</template>

<style lang="sass" scoped>
.opener
  display: flex
  flex-direction: column
  align-items: center
  gap: 1.5rem
</style>
