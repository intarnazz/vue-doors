<script setup>
import { onMounted, ref, computed, onUnmounted, watch } from 'vue'
import { title, price } from '@/utilte/utilte.js'
import { save as ls_save, get, del as ls_del } from '@/localStorage/localStorage.js'
import { GetDoor, PatchDoor, GetBrand, GetMaterial } from '@/api/api.js'
import { RouterLink } from 'vue-router'
import ComponentImg from '@/components/ComponentImg.vue'
import ComponentDoorСalculator from '@/components/ComponentDoorСalculator.vue'
import SvgRight from '@/components/svg/SvgRight.vue'
import SvgLeft from '@/components/svg/SvgLeft.vue'
import SvgClose from '@/components/svg/SvgClose.vue'
import ComponentDoorChangeMenu from '@/components/ComponentDoorChangeMenu.vue'

const props = defineProps(['door', 'id', 'doorKey', 'doorsLen'])
const emit = defineEmits(['close', 'left', 'right', 'handleScroll'])
const height = ref(document.body.scrollHeight + 1000)
const isFavorite = ref(false)
const door_api = ref(props.door)
const loding = ref(true)
const brands = ref([])
const materials = ref([])
const token = ref(sessionStorage.getItem('token'))

const admin = computed(() => {
  return token.value != undefined
})

const door = computed(() => {
  return props.id || admin.value ? door_api.value : props.door
})

const isLeft = computed(() => {
  return props.doorKey > 0
})

const isRight = computed(() => {
  return props.doorsLen - 1 > props.doorKey
})

async function DoorGet() {
  const res = await GetDoor(props.id)
  door_api.value = res.data
}

async function brandGet() {
  const res = await GetBrand()
  brands.value = res.data
}

async function materialGet() {
  const res = await GetMaterial()
  materials.value = res.data
}

async function init() {
  loding.value = true
  if (props.id) {
    await DoorGet()
  }
  if (admin.value) {
    await brandGet()
    await materialGet()
  }
  loding.value = false
  isFavorite.value = get('favorite').includes(door.value.id)
}

onMounted(async () => {
  init()
  if (!props.id) {
    document.addEventListener('keydown', keyDown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', keyDown)
})

function close() {
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

function save(key, value) {
  isFavorite.value = true
  ls_save(key, value)
}

function del(key, value) {
  isFavorite.value = false
  ls_del(key, value)
}

function left() {
  if (isLeft.value) {
    emit('left')
  }
}

function right() {
  if (isRight.value) {
    emit('right')
  } else {
    emit('handleScroll', true)
  }
}

function keyDown(e) {
  switch (e.key) {
    case 'ArrowLeft':
      left()
      break
    case 'ArrowRight':
      right()
      break
    default:
      break
  }
}

function patch() {
  PatchDoor(door_api.value)
}

function brandsChange(brand_id) {
  console.log(brand_id)
  door_api.value.brand_id = brand_id
}

watch(() => props.door, init)
</script>

<template>
  <section
    :style="!props.id ? `height: ${height}px` : ''"
    :class="{ 'single-page': props.id }"
    class="door__wrapper"
  >
    <div class="door__sticky">
      <div @click="close" class="door__relative box-x">
        <div v-if="!props.id" class="close">
          <SvgClose />
        </div>
        <button
          @click.stop="left()"
          v-if="!props.id"
          :style="!isLeft ? 'cursor: auto' : ''"
          class="pagin__left pagin flex center"
        >
          <SvgLeft :isLeft="isLeft" />
        </button>

        <div @click.stop="" class="door">
          <div class="box-y gap2">
            <p v-if="!loding">
              каталог / <span style="font-weight: 600">{{ title(door.name) }}</span>
            </p>
            <div class="box-x door__content">
              <div class="door__content-button-wrapper box-x gap">
                <button @click="patch" class="button">Сохранить</button>
                <RouterLink
                  v-if="!loding"
                  :to="{ name: 'door', params: { id: door.id } }"
                  class="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path
                      d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
                    />
                  </svg>
                </RouterLink>

                <div
                  v-if="!loding"
                  @click="isFavorite ? del('favorite', door.id) : save('favorite', door.id)"
                  :class="{ favorite: isFavorite }"
                  class="button"
                >
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
              <div v-if="!loding" class="image__wrapper box-x">
                <ComponentImg
                  class="image"
                  :src="door.image_front ? door.image_front.id : ''"
                  :alt="door.image_front ? door.image_front.alt : ''"
                />
                <ComponentImg
                  class="image"
                  :src="door.image_back ? door.image_back.id : ''"
                  :alt="door.image_back ? door.image_back.alt : ''"
                />
              </div>
              <div v-if="!loding" class="box-y">
                <h2 v-if="!admin" class="h2">{{ title(door.name) }}</h2>
                <input type="text" v-model="door.name" v-else class="h2" />
                <div class="box-x door__info">
                  <div class="box-y gap">
                    <p>Цена:</p>
                    <template v-for="(value, key) in door" :key="key">
                      <p v-if="typeof value === typeof {} && value.name" class="">
                        {{ title(keyFormat(key)) }}:
                      </p>
                    </template>
                  </div>
                  <div class="box-y gap">
                    <p v-if="!admin">{{ price(door.price) }}</p>
                    <input type="number" v-model="door.price" v-else class="" />
                    <template v-for="(value, key) in door" :key="key">
                      <template v-if="typeof value === typeof {} && value.name">
                        <p v-if="!admin" class="">
                          {{ title(value.name) }}
                        </p>

                        <ComponentDoorChangeMenu
                          v-else-if="key === 'brand'"
                          @change="brandsChange"
                          :arr="brands"
                          :id="value.id"
                        />

                        <select
                          v-else-if="key === 'material'"
                          v-model="value.name"
                          id="cars"
                          name="cars"
                        >
                          <option
                            v-for="(material, key) in materials"
                            :key="key"
                            :value="material.name"
                          >
                            {{ material.name }}
                          </option>
                        </select>
                      </template>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <ComponentDoorСalculator v-if="!loding" :door="door" />
          </div>
        </div>
        <button
          @click.stop="right()"
          v-if="!props.id"
          :style="!isRight ? 'cursor: auto' : ''"
          class="pagin__right pagin flex center"
        >
          <SvgRight :isRight="isRight" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
input
  background-color: #ffffff11
  color: #fff
.pagin
  cursor: pointer
  padding: 10rem 0
  & svg
    width: 2.4rem
    height: 2.4rem
    transition: .3s
  &:hover
    & svg
      fill: #fff
      transform: scale(1.1)

.button
  padding: .5rem
  display: flex
  align-items: center
  justify-content: center
  background-color: #fff
  color: #000
  cursor: pointer
  transition: .2s
  &:hover
    & svg
      fill: hsl(133,59%,50%)
  & svg
    transition: .2s
    fill: rgba(0, 0, 0, .5 )

.close
  position: absolute
  top: 0
  left: 0
  color: #fff
  cursor: pointer
  padding: 1rem

.image
  min-width: 12.1875rem
  min-height: 25.5625rem
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
  & .h2
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
    & .h2
      font-size: 2.25rem
    & .image
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

.favorite svg
  fill: hsl(133,59%,50%)

.single-page
  &.door
    &__wrapper
      position: relative
      background: none

.single-page
  & .close
    display: none
  & .door
    padding: 0 0
    cursor: auto
    overflow: auto
    height: auto
    &__sticky
      position: relative
    &__relative
      cursor: auto
      position: relative
      animation: none


@keyframes animation_relative
  0%
    padding: calc(100dvh) 0 0
  100%
    padding: calc(1rem) 0 0
</style>
