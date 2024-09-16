<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SearchComponent from '@/components/ComponentSearch.vue'
import { RouterLink } from 'vue-router'
import LayoutAdmin from '@/layout/LayoutAdmin.vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x header__wrapper">
      <nav class="flex box-x">
        <RouterLink :to="{ name: 'catalog' }">Каталог</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Контакты</RouterLink>
      </nav>
      <ComponentLogo size="l" />
      <SearchComponent class="flex" />
    </LayoutWrapper>
  </header>
  <LayoutAdmin></LayoutAdmin>
</template>

<style lang="sass" scoped>
.header
  padding: 1rem 0
  box-shadow: 0 0 10px 0 #d4d4d4
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  & nav
    justify-content: start
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem
</style>
