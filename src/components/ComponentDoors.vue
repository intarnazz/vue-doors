<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { GetDoors } from '@/api/api.js'
import SectionDoor from '@/components/sections/SectionDoor.vue'
import { title, price } from '@/utilte/utilte.js'
import { save, get } from '@/localStorage/localStorage.js'
import ComponentImg from '@/components/ComponentImg.vue'

const response_id = ref(0)
const props = defineProps(['start', 'end', 'doorStyle', 'paging', 'mod', 'filters'])
const doors = ref([])
const door = ref(null)
const door_key = ref(NaN)
const limit = ref(null)
const offset = ref(null)
const totalCount = ref(null)
const loding = ref(true)

async function _init_clear() {
  doors.value = []
  door.value = null
  door_key.value = NaN
  limit.value = null
  offset.value = null
  totalCount.value = null
  loding.value = true
  await init()
}

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
  response_id.value++
  if (typeof mod.value !== typeof [] || mod.value.length > 0) {
    const res = await GetDoors(
      start.value,
      end.value,
      mod.value,
      props.filters?.brand.map((i) => i.id),
      props.filters?.material.map((i) => i.id),
      response_id.value
    )
    if (response_id.value == res.response_id) {
      doors.value = [...doors.value, ...res.data]
      filter()
      offset.value = res.pagingInfo.limit
      limit.value = 8
      totalCount.value = res.pagingInfo.totalCount
    } else {
      console.log(response_id.value, res.response_id)
    }
    loding.value = false
  }
}

async function handleScroll(skip = false) {
  if (totalCount.value > offset.value && loding.value === false && props.paging) {
    const scrollPosition = window.scrollY + window.innerHeight
    const bottomPosition = document.documentElement.scrollHeight
    if (scrollPosition + 500 >= bottomPosition || skip) {
      console.log('handleScroll')
      await init()
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

function left() {
  door_key.value--
  openDoor(door_key.value, doors.value[door_key.value])
}

function right() {
  door_key.value++
  openDoor(door_key.value, doors.value[door_key.value])
}

function filter() {
  doors.value = doors.value.filter(
    (i) =>
      !props.filters ||
      (props.filters['type_door'][0]?.focus === true &&
        props.filters['type_door'][0].name === i.type) ||
      (props.filters['type_door'][1]?.focus === true &&
        props.filters['type_door'][1].name === i.type)
  )
}

function modChange() {
  _init_clear()
}

async function filtersChange() {
  await _init_clear()
  await handleScroll(true)
}

watch(() => props.mod, modChange)
watch(() => props.filters, filtersChange)
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
  <template v-for="(value, key) in doors" :key="key">
    <div @click="openDoor(key, value)" class="hover" :class="{ mini: props.doorStyle === 'mini' }">
      <div class="door__item box-y">
        <div class="door__image-wrapper box-x">
          <ComponentImg class="image" :src="value.image_front.id" :alt="value.image_front.alt" />
          <div v-if="props.doorStyle === 'mini'" class="door__image-gradient"></div>
          <ComponentImg class="image" :src="value.image_back.id" :alt="value.image_back.alt" />
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
    border-radius: 5px
    box-shadow: 0 0 30px 0 #838383
  &__image-wrapper
    width: 100%
    background-color: #000
    border-radius: 5px
    & .image
      width: 50%
      height: 355px
      object-fit: cover
      &:first-child
        border-top-left-radius: 5px
      &:last-child
        border-top-right-radius: 5px

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
      & .image
        &:first-child
          border-bottom-left-radius:  5px
        &:last-child
          border-bottom-right-radius: 5px
    &__image-gradient
      background: linear-gradient(to bottom, #00000000, #000000ff)
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      border-radius:  5px
      transition: .3s
      opacity: 0
</style>
