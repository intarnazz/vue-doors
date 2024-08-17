<script setup>
import { computed, onMounted, ref } from 'vue'
import { GetDoors } from '@/api/api.js'
import { title, price } from '@/utilte/utilte.js'

const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['start', 'end'])
const doors = ref({})

const start = computed(() => {
  return props.start ? props.start : 0
})

const end = computed(() => {
  return props.end ? props.end : 6
})

onMounted(async () => {
  const res = await GetDoors(start.value, end.value)
  doors.value = res.data
})
</script>

<template>
  <div v-for="(door, key) in doors" :key="key" class="door__item hover box-y">
    <div class="door__image-wrapper box-x">
      <img :src="`${API_URL}image/${door.image_front.id}`" :alt="door.image_front.alt" />
      <img :src="`${API_URL}image/${door.image_back.id}`" :alt="door.image_back.alt" />
    </div>
    <div class="box-y flex door__info-wrapper">
      <div class="box-x door__info-row flex">
        <p>
          {{ title(door.name) }}
        </p>
        <p>
          {{ price(door.price) }}
        </p>
      </div>
      <div class="box-x door__info-row flex">
        <p>Бренд:</p>
        <p>
          {{ title(door.brand.name) }}
        </p>
      </div>
      <div class="box-x door__info-row flex">
        <p>Материал:</p>
        <p>
          {{ title(door.material.name) }}
        </p>
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
      height: 335px
      object-fit: cover
      &:first-child
        border-top-left-radius: 20px
      &:last-child
        border-top-right-radius: 20px
</style>
