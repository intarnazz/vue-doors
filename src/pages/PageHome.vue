<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
import SectionContacts from '@/components/sections/SectionContacts.vue'
import SectionDoors from '@/components/sections/SectionDoors.vue'
import SectionDoorsSliderNonTarget from '@/components/sections/SectionDoorsSliderNonTarget.vue'
</script>

<template>
  <main v-if="!loding" class="main box-y">
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionOpener />
    </LayoutWrapper>
    <SectionDoorsSliderNonTarget />
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionDoors />
    </LayoutWrapper>
    <SectionContacts />
  </main>
</template>

<style lang="sass" scoped>
.main
  gap: 4.5rem
  &__wrapper
    display: flex
    align-items: center
    gap: 4.5rem
</style>
