<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'

const emit = defineEmits(['mod'])

function modChange(value) {
  emit('mod', value)
}
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x">
      <nav>
        <ul class="box-x">
          <li @click="modChange('catalog')">Каталог</li>
          <li @click="modChange('history')">История просмотра</li>
          <li @click="modChange('favorite')">Избранное</li>
        </ul>
      </nav>
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  position: sticky
  top: 0
  z-index: 2
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
      & li 
        cursor: pointer
</style>
