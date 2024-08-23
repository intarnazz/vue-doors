<script setup>
import { ref } from 'vue'
import { title, price } from '@/utilte/utilte.js'

const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['door'])
const emit = defineEmits(['close'])
const height = ref(document.body.scrollHeight + 1000)

function colse() {
  emit('close')
}

function keyFormat(key) {
  switch (key) {
    case 'brand':
      return 'бренд'
    case 'material':
      return 'материал'
    default:
      return ''
  }
}
</script>

<template>
  <section :style="`height: ${height}px`" class="door__wrapper">
    <div class="door__sticky">
      <div @click="colse" class="door__relative box-x">
        <div class="colse">
          <svg
            fill="#fff"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            aria-hidden="false"
            style="flex-shrink: 0"
          >
            <desc lang="en-US">An X shape</desc>
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
            ></path>
          </svg>
        </div>
        <div @click.stop="" class="door">
          <div class="box-y gap2">
            <p>
              каталог / <span style="font-weight: 600">{{ title(props.door.name) }}</span>
            </p>
            <div class="box-x door__content">
              <div class="door__content-button-wrapper">
                <div class="button">
                  <svg
                    class=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                    style="flex-shrink: 0"
                  >
                    <desc lang="en-US">A heart</desc>
                    <path
                      d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="image__wrapper box-x">
                <img
                  class="image"
                  :src="`${API_URL}image/${props.door.image_front.id}`"
                  :alt="props.door.image_front.alt"
                />
                <img
                  class="image"
                  :src="`${API_URL}image/${props.door.image_back.id}`"
                  :alt="props.door.image_back.alt"
                />
              </div>
              <div class="box-y">
                <h2 class="">{{ title(props.door.name) }}</h2>
                <div class="box-x door__info">
                  <div class="box-y gap">
                    <p>Цена:</p>
                    <template v-for="(value, key) in props.door" :key="key">
                      <p v-if="typeof value === typeof {} && value.name" class="">
                        {{ title(keyFormat(key)) }}:
                      </p>
                    </template>
                  </div>
                  <div class="box-y gap">
                    <p>{{ price(props.door.price) }}</p>
                    <template v-for="(value, key) in props.door" :key="key">
                      <p v-if="typeof value === typeof {} && value.name" class="">
                        {{ title(value.name) }}
                      </p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.button
  padding: .5rem
  display: flex
  align-items: center
  justify-content: center
  background-color: #fff
  cursor: pointer
  transition: .2s
  &:hover
    & svg
      fill: hsl(133,59%,50%)
  & svg
    transition: .2s
    fill: rgba(0, 0, 0, .5 )

.colse
  position: absolute
  top: 0
  left: 0
  color: #fff
  cursor: pointer
  padding: 1rem

.image
  &__wrapper
    margin: 0rem 8rem

h1
  margin: 4rem
.door
  padding: 1rem 2rem
  cursor: auto
  overflow: scroll
  height: 99dvh
  background-color: #fff
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  width: 100%
  max-width: 1412px
  &__content-button-wrapper
    position: absolute
    top: 0
    right: 0
    padding: 1rem 2rem
  & h2
    margin: 2rem 0
  &__info
    gap: 1rem
  &__content
    position: relative
    color: #fff
    background-color: #1f3a33
    border-radius: 3px
    justify-content: flex-start
    & p
      color: rgba(255,255, 255, .8 )
    & h2
      font-size: 2.25rem
    & img
      width: 195px
      height: 409px
      object-fit: cover

  &__relative
    cursor: zoom-out
    position: relative
    padding: 1rem 0 0
    justify-content: center
    animation: .7s animation_relative
  &__sticky
    position: sticky
    top: 0
    left: 0
  &__wrapper
    position: absolute
    top: 0
    left: 0
    z-index: 3
    background-color: rgba(0, 0, 0, .5)
    width: 100%

@keyframes animation_relative
  0%
    padding: calc(100dvh) 0 0
  100%
    padding: calc(1rem) 0 0
</style>
