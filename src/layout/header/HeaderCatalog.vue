<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x">
      <nav>
        <ul class="box-x">
          <li>
            <RouterLink :to="{ name: 'catalog' }">Каталог</RouterLink>
          </li>
          <li>История просмотра</li>
          <li>Избранное</li>
        </ul>
      </nav>
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  font-size: 13px
  padding: 1rem 0
  display: flex
  justify-content: center
  align-items: center
  border-bottom: 1px solid #d4d4d4
  background-color: #f9f9f9
  width: 100%
  & nav
    & ul 
      gap: 1rem
</style>
