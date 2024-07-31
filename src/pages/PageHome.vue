<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
import SectionContacts from '@/components/sections/SectionContacts.vue'

import { GetDoors } from '@/api/api.js'
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await GetDoors(0, 6)
  console.log(res)
})
</script>

<template>
  <main v-if="!loding" class="main box-y">
    <LayoutWrapper class="flex box-x main__wrapper">
      <SectionOpener />
    </LayoutWrapper>
    <SectionContacts />
  </main>
</template>

<style lang="sass" scoped>
.main
  &__wrapper
    display: flex
    flex-direction: column
    align-items: center
</style>
