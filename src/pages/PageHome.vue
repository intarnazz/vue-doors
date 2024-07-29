<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
</script>

<template>
  <main v-if="!loding" class="main box-y">
    <LayoutWrapper class="box-x main__wrapper">
      <SectionOpener />
    </LayoutWrapper>
  </main>
</template>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: column
  align-items: center
</style>
