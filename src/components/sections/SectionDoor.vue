<script setup>
import { ref } from 'vue'

const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['door'])
const emit = defineEmits(['close'])
const height = ref(document.body.scrollHeight)

function colse() {
  emit('close')
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
          <div class="box-y">
            <p>
              каталог / <span style="font-weight: 600">{{ props.door.name }}</span>
            </p>
            <div class="box-x door__content">
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
                <h2 class="">{{ props.door.name }}</h2>
                <div class="box-y">
                  <template v-for="(value, key) in props.door" :key="key">
                    <div v-if="typeof value === typeof {} && value.name" class="">
                      {{ value.name }}
                    </div>
                  </template>
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
.colse
  position: absolute
  top: 0
  left: 0
  color: #fff
  cursor: pointer
  padding: 1rem

.image
  &__wrapper
    margin: 4rem 8rem

h1
  margin: 4rem
.door
  padding: 1rem 2rem
  cursor: auto
  overflow: scroll
  height: 99dvh
  top: 1rem
  background-color: #fff
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  width: 100%
  max-width: 1412px
  &__content
    justify-content: flex-start
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
  &__sticky
    position: sticky
    top: 0
    left: 0
  &__wrapper
    position: absolute
    top: 0
    left: 0
    z-index: 2
    background-color: rgba(0, 0, 0, .5)
    width: 100%
</style>
