<script setup>
import { RouterLink } from 'vue-router'
import ComponentDoors from '@/components/ComponentDoors.vue'
import ComponentLinkStyle from '@/components/ComponentLinkStyle.vue'
</script>

<template>
  <section class="door box-y">
    <div class="box-x door__title">
      <div class="flex"></div>
      <h2 class="">
        <RouterLink :to="{ name: 'catalog' }"> Откройте идеальные двери </RouterLink>
      </h2>
      <div class="flex" style="text-align: end">
        <ComponentLinkStyle :name="`catalog`"> Полный каталог дверей </ComponentLinkStyle>
      </div>
    </div>
    <div class="door__grid">
      <ComponentDoors />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.door
  gap: 2.5rem
  align-items: center
  &__title
    width: 100%
  & h2
    font-size: 2.5rem
    font-weight: 500
  &__grid
    width: 100%
    display: grid
    grid-template-columns: 1fr  1fr  1fr
    gap: 2rem
</style>
