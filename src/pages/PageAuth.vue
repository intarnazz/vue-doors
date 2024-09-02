<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionAuth from '@/components/sections/SectionAuth.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionAuth />
    </LayoutWrapper>
  </LayoutPage>
</template>

<style lang="sass" scoped>
.main
  margin: 4rem 0
</style>
