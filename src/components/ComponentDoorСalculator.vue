<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { title, price } from '@/utilte/utilte.js'

const props = defineProps(['door'])
const door = ref(props.door)

function init() {
  door.value = props.door
  door.value.components = door.value.components.map((i) => (i = { ...i, count: 1 }))
}

onMounted(() => {
  init()
})

const totalPrice = computed(() => {
  return price(
    door.value.components.reduce((sum, component) => sum + component.price * component.count, 0) +
      door.value.price
  )
})

function priceChange(key, value) {
  door.value.components[key].count +=
    value > 0 ? value : door.value.components[key].count <= 0 ? 0 : value
}

function doorChange() {
  init()
}

watch(() => props.door, doorChange)
</script>

<template>
  <div class="box-y gap2 calculator">
    <h2>{{ totalPrice }}</h2>
    <ul class="box-y">
      <li class="box-x calculator__item gap2" v-for="(value, key) in door.components" :key="key">
        <p>{{ title(value.name) }}</p>
        <hr class="flex" />
        <div class="box-x gap">
          <p>{{ price(value.price * value.count) }}</p>
          <div class="box-x calculator__price">
            <button @click="priceChange(key, -1)">-</button>
            <p>{{ value.count }}</p>
            <button @click="priceChange(key, 1)">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
h2
  font-size: 2rem

.calculator
  &__item
    background-color: hsl(164, 30%, 17%)
    color: #fff
    padding: .5rem 1rem
    border-radius: 5px
    &:first-child
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
    &:last-child
      border-top-left-radius: 0
      border-top-right-radius: 0
    & hr
      border: none
      border-top: 1px solid hsla(0, 0%, 100%, .5)
  &__price
    border-radius: 10px
    border: 1px solid hsl(164, 30%, 17%)
    & p
      padding: .25rem .5rem
    & button
      padding: .25rem 1rem
      border-radius: 8px
      transition: .2s
      font-size: 1.6rem
      color: #fff
      &:first-child
        border-bottom-right-radius: 0
        border-top-right-radius: 0
      &:last-child
        border-bottom-left-radius: 0
        border-top-left-radius: 0
      &:hover
        font-weight: 600
        color: #fff
        background-color: hsl(164, 30%, 40%)
</style>
