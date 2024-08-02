<script setup>
import { onMounted, ref } from 'vue'
import { GetDoors } from '@/api/api.js'
import { title, price } from '@/utilte/utilte.js'

const API_URL = import.meta.env.VITE_API_URL
const doors = ref({})

onMounted(async () => {
  const res = await GetDoors(0, 6)
  doors.value = res.data
})
</script>

<template>
  <section class="door box-y">
    <h2>Explore inspiring designs</h2>
    <div class="door__grid">
      <div v-for="(door, key) in doors" :key="key" class="door__item box-y">
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
            <p>Brand:</p>
            <p>
              {{ title(door.brand.name) }}
            </p>
          </div>
          <div class="box-x door__info-row flex">
            <p>Material:</p>
            <p>
              {{ title(door.material.name) }}
            </p>
          </div>
        </div>
        <div class="box-y"></div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.door
  gap: 2.5rem
  align-items: center
  & h2
    font-size: 2.5rem
    font-weight: 500
  &__grid
    width: 100%
    display: grid
    grid-template-columns: 1fr  1fr  1fr
    gap: 2rem
  &__info-row
    justify-content: space-between
    & p
      &:first-child
        font-weight: 700
  &__info-wrapper
    margin-top: -22px
    padding: 14px
    gap: 1rem
    & div
      &:first-child
        font-size: 2rem
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
