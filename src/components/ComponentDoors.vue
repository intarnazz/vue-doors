<script setup>
import { computed, onMounted, ref } from 'vue'
import { GetDoors } from '@/api/api.js'
import { title, price } from '@/utilte/utilte.js'

const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['start', 'end', 'doorStyle'])
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
  <div
    v-for="(door, key) in doors"
    :key="key"
    :class="{ mini: props.doorStyle === 'mini' }"
    class="door__item hover box-y"
  >
    <div class="door__image-wrapper box-x">
      <img :src="`${API_URL}image/${door.image_front.id}`" :alt="door.image_front.alt" />
      <div v-if="props.doorStyle === 'mini'" class="door__image-gradient"></div>
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
      <div v-if="props.doorStyle !== 'mini'" class="box-x door__info-row flex">
        <p>Бренд:</p>
        <p>
          {{ title(door.brand.name) }}
        </p>
      </div>
      <div v-if="props.doorStyle !== 'mini'" class="box-x door__info-row flex">
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
      height: 355px
      object-fit: cover
      &:first-child
        border-top-left-radius: 20px
      &:last-child
        border-top-right-radius: 20px



.mini
  &.door
    &__item
      box-shadow: none
      font-weight: 500
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
