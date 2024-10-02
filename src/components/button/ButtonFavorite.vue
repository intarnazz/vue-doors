<script setup>
import { onMounted, ref } from 'vue'
import { save, get, del } from '@/localStorage/localStorage.js'

const props = defineProps(['id'])
const id = ref(+props.id)
const isFavorite = ref(false)
const loding = ref(true)

async function init() {
  loding.value = true
  isFavorite.value = get('favorite').includes(props.id)
  loding.value = false
}

onMounted(async () => {
  init()
})

function saveFavorite(key, value) {
  isFavorite.value = true
  save(key, value)
}

function delFavorite(key, value) {
  isFavorite.value = false
  del(key, value)
}
</script>

<template>
  <div
    v-if="id"
    @click="isFavorite ? delFavorite('favorite', id) : saveFavorite('favorite', id)"
    :class="{ favorite: isFavorite }"
    class="button button_w"
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
</template>

<style lang="sass" scoped>
.favorite svg
  fill: hsl(133,59%,50%)
</style>
