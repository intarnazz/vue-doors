<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SearchComponent from '@/components/ComponentSearch.vue'
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x header__wrapper">
      <nav class="flex box-x">
        <p>Каталог</p>
        <p>Контакты</p>
      </nav>
      <img src="" alt="LOGO" />
      <SearchComponent class="flex" />
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  margin: 37px 0
  & nav
    justify-content: start
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem
</style>
