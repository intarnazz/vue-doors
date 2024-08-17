<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SearchComponent from '@/components/ComponentSearch.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x header__wrapper">
      <nav class="flex box-x">
        <RouterLink :to="{ name: 'catalog' }">Каталог</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Контакты</RouterLink>
      </nav>
      <RouterLink :to="{ name: 'home' }">
        <img src="" alt="LOGO" />
      </RouterLink>
      <SearchComponent class="flex" />
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  padding: 1rem 0
  box-shadow: 0 0 10px 0 #d4d4d4
  position: relative
  z-index: 1
  & nav
    justify-content: start
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem
</style>
