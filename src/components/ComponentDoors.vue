<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { GetDoors } from '@/api/api.js'
import SectionDoor from '@/components/sections/SectionDoor.vue'
import { title, price } from '@/utilte/utilte.js'
import { save, get } from '@/localStorage/localStorage.js'

const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['start', 'end', 'doorStyle', 'paging', 'mod'])
const doors = ref([])
const door = ref(null)
const door_key = ref(NaN)
const limit = ref(null)
const offset = ref(null)
const totalCount = ref(null)
const loding = ref(true)

const mod = computed(() => {
  return props.mod && props.mod != 'catalog' ? get(props.mod) : ''
})

const start = computed(() => {
  return (offset.value ?? props.start) ? (offset.value ?? props.start) : 0
})

const end = computed(() => {
  return (limit.value ?? props.end) ? (limit.value ?? props.end) : 6
})

const doors_len = computed(() => {
  return doors.value.length
})

async function init() {
  loding.value = true
  if (typeof mod.value !== typeof [] || mod.value.length > 0) {
    const res = await GetDoors(start.value, end.value, mod.value)
    doors.value = [...doors.value, ...res.data]
    offset.value = res.pagingInfo.limit
    limit.value = 8
    totalCount.value = res.pagingInfo.totalCount
  }
  loding.value = false
}

function handleScroll(skip = false) {
  if (totalCount.value > offset.value && loding.value === false) {
    const scrollPosition = window.scrollY + window.innerHeight
    const bottomPosition = document.documentElement.scrollHeight
    if (scrollPosition + 500 >= bottomPosition || skip) {
      init()
    }
  }
}

onMounted(async () => {
  init()
  if (props.paging === true) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  document.body.style = 'overflow: auto;'
  window.removeEventListener('scroll', handleScroll)
})

function openDoor(key, value) {
  door_key.value = key
  door.value = value
  document.body.style = 'overflow: hidden;'
  save('history', door.value.id)
}

function closeDoor() {
  door.value = null
  document.body.style = 'overflow: auto;'
}

function modChange() {
  doors.value = []
  limit.value = null
  offset.value = null
  totalCount.value = null
  init()
}

function left() {
  door_key.value--
  openDoor(door_key.value, doors.value[door_key.value])
}

function right() {
  door_key.value++
  openDoor(door_key.value, doors.value[door_key.value])
}

watch(() => props.mod, modChange)
</script>

<template>
  <SectionDoor
    @handleScroll="handleScroll"
    @close="closeDoor"
    @left="left"
    @right="right"
    v-if="door != null"
    :door="door"
    :doorKey="door_key"
    :doorsLen="doors_len"
  />
  <div
    @click="openDoor(key, value)"
    v-for="(value, key) in doors"
    :key="key"
    class="hover"
    :class="{ mini: props.doorStyle === 'mini' }"
  >
    <div class="door__item box-y">
      <div class="door__image-wrapper box-x">
        <img :src="`${API_URL}image/${value.image_front.id}`" :alt="value.image_front.alt" />
        <div v-if="props.doorStyle === 'mini'" class="door__image-gradient"></div>
        <img :src="`${API_URL}image/${value.image_back.id}`" :alt="value.image_back.alt" />
      </div>
      <div class="box-y flex door__info-wrapper">
        <div class="box-x door__info-row flex">
          <p>
            {{ title(value.name) }}
          </p>
          <p>
            {{ price(value.price) }}
          </p>
        </div>
        <div v-if="props.doorStyle !== 'mini'" class="box-x door__info-row flex">
          <p>Бренд:</p>
          <p>
            {{ title(value.brand.name) }}
          </p>
        </div>
        <div v-if="props.doorStyle !== 'mini'" class="box-x door__info-row flex">
          <p>Материал:</p>
          <p>
            {{ title(value.material.name) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.door
  &__info-row
    justify-content: space-between
    & p
      &:first-child
        font-weight: 700
  &__info-wrapper
    padding: 14px
    gap: 1rem
    & div
      &:first-child
        font-size: 1.7rem
        font-weight: 700
  &__item
    cursor: pointer
    display: flex
    width: 100%
    background-color: #fff
    border-radius: 20px
    box-shadow: 0 0 30px 0 #838383
  &__image-wrapper
    width: 100%
    background-color: #000
    border-radius: 20px
    & img
      width: 50%
      height: 355px
      object-fit: cover
      &:first-child
        border-top-left-radius: 20px
      &:last-child
        border-top-right-radius: 20px

.mini
  &.hover
    &:hover
      & .door
        &__info-wrapper
          margin: -60px 0 60px
          padding: .5rem 1rem
          color: #fff
          & div
            &:first-child
              font-size: 1.6rem
        &__image-gradient
          opacity: .5
  & .door
    &__item
        box-shadow: none
        font-weight: 500
    &__info-row
      & p
        &:first-child
          font-weight: 500
    &__info-wrapper
      transition: .3s
      padding: .5rem 0
      position: relative
      & div
        max-height: 10px
        &:first-child
          font-size: 1rem
          font-weight: 500
    &__image-wrapper
      position: relative
      & img
        &:first-child
          border-bottom-left-radius:  20px
        &:last-child
          border-bottom-right-radius: 20px
    &__image-gradient
      background: linear-gradient(to bottom, #00000000, #000000ff)
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      border-radius:  20px
      transition: .3s
      opacity: 0
</style>
