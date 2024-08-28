<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { computed, onMounted, ref } from 'vue'

const emit = defineEmits(['mod'])
const focus = ref('catalog')
const catalog = ref(null)
const history = ref(null)
const favorite = ref(null)

const catalog_width = ref(0)
const history_width = ref(0)
const favorite_width = ref(0)

function modChange(value) {
  focus.value = value
  emit('mod', focus.value)
}

onMounted(() => {
  catalog_width.value = getComputedStyle(catalog.value).width
  history_width.value = getComputedStyle(history.value).width
  favorite_width.value = getComputedStyle(favorite.value).width
})

const left = computed(() => {
  switch (focus.value) {
    case 'catalog':
      return 'width: 0'
    case 'history':
      return `width: calc( ${catalog_width.value} + 1rem )`
    case 'favorite':
      return `width: calc( ${history_width.value} + ${catalog_width.value} + 2rem )`
    default:
      return 'width: 0'
  }
})

const right = computed(() => {
  switch (focus.value) {
    case 'catalog':
      return `width: calc( ${favorite_width.value} + ${history_width.value} + 2rem )`
    case 'history':
      return `width: calc( ${favorite_width.value} + 1rem )`
    case 'favorite':
      return `width: 0`
    default:
      return `width: calc( ${favorite_width.value} + ${history_width.value} + 2rem )`
  }
})
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-y">
      <div class="box-x">
        <div class="box-y">
          <nav class="box-x">
            <ul class="box-x">
              <li ref="catalog" @click="modChange('catalog')">Каталог</li>
              <li ref="history" @click="modChange('history')">История просмотра</li>
              <li ref="favorite" @click="modChange('favorite')">Избранное</li>
            </ul>
          </nav>
          <div class="box__wrapper box-x">
            <div :style="left" class="box box__left"></div>
            <div class="box box__center flex"></div>
            <div :style="right" class="box box__right"></div>
          </div>
        </div>
        <div class="flex"></div>
      </div>
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.box
  transition: .5s
  &__center
    margin-top: -2px
    transition: 0
    padding: 2px 0
    background-color: #0d704b

.header
  position: sticky
  top: 0
  z-index: 2
  font-size: 13px
  display: flex
  justify-content: center
  align-items: center
  border-bottom: 1px solid #d4d4d4
  background-color: #f9f9f9
  width: 100%
  & nav
    padding: 1rem 0
    & ul
      gap: 1rem
      & li
        cursor: pointer
</style>
