<script setup>
import SectionDoor from '@/components/sections/SectionDoor.vue'
import { GetDoor } from '@/api/api.js'
import { onMounted, ref } from 'vue'

const props = defineProps(['id'])
const door = ref({})
const loding = ref(true)

async function init() {
  const res = await GetDoor(props.id)
  door.value = res.data
  loding.value = false
}

onMounted(() => {
  init()
})
</script>

<template>
  <template v-if="!loding">
    <SectionDoor :door="door" :id="props.id" />
  </template>
</template>

<style lang="sass" scoped></style>
