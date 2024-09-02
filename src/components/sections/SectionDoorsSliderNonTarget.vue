<script setup>
import { onMounted, ref } from 'vue'
import { GetDoors } from '@/api/api.js'
import { title, price } from '@/utilte/utilte.js'
import ComponentImg from '@/components/ComponentImg.vue'
import { RouterLink } from 'vue-router'

const doors = ref({})
const slider = ref(0)
const loop = ref(0)
const speed = ref(1)
const isHovered = ref(false)

onMounted(async () => {
  const res = await GetDoors(0, 10)
  doors.value = res.data
})

const mouseEvent = (e) => {
  isHovered.value = e
}

setInterval(() => {
  loop.value += speed.value
  slider.value -= speed.value
  if (loop.value >= 280) {
    loop.value = 0
    slider.value += 280
    const door = doors.value.shift()
    doors.value.push(door)
  }
}, 9)

setInterval(() => {
  if (isHovered.value === true && speed.value > 0) {
    speed.value -= 0.01
  } else if (speed.value < 0) {
    speed.value = 0
  } else if (isHovered.value === false && speed.value <= 1) {
    speed.value += 0.01
  } else if (speed.value > 1) {
    speed.value = 1
  }
}, 1)
</script>

<template>
  <section class="doorsSliderNonTarget">
    <div
      @mouseenter="mouseEvent(true)"
      @mouseleave="mouseEvent(false)"
      class="box-x doorsSliderNonTarget__slider-box"
    >
      <div :style="`margin-left: ${slider}px`" class="box-x doorsSliderNonTarget__wrapper">
        <div v-for="(door, key) in doors" :key="key" class="doorsSliderNonTarget__item hover">
          <RouterLink :to="{ name: 'door', params: { id: door.id } }" class="">
            <ComponentImg
              :src="door.image_front.id"
              :alt="door.image_front.alt"
              class="doorsSliderNonTarget__item-img image"
            />
            <div class="doorsSliderNonTarget__gradient"></div>
            <div class="doorsSliderNonTarget__info-wrapper box-y">
              <p>
                {{ title(door.name) }}
              </p>
              <p>
                {{ price(door.price) }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.doorsSliderNonTarget
  &__slider-box
    width: 99.5dvw
    padding: 2rem 0
    margin: -2rem 0
    overflow: hidden
  &__wrapper
    gap: 40px
  &__gradient
    width: 100%
    height: 100%
    border-radius: 23px
    z-index: 2
    background: linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, .7))
    position: absolute

  &__info-wrapper
    width: 100%
    height: 100%
    border-radius: 23px
    z-index: 3
    position: absolute
    padding: 1rem
    color: #fff
    display: flex
    justify-content: flex-end
    font-size: 1.5rem
    gap: .5em

  &__item
    width: 240px
    height: 450px
    min-width: 240px
    border-radius: 23px
    position: relative
    & .image
      width: 100%
      height: 100%
      z-index: 1
      object-fit: cover
      border-radius: 23px
      position: absolute
      top: 0
      left: 0
</style>
