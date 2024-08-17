<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import HeaderCatalog from '@/layout/header/HeaderCatalog.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
</script>

<template>
  <main v-if="!loding" class="main flex box-y">
    <HeaderCatalog class="" />
    <LayoutWrapper class="flex box-y main__wrapper">
      <h1>PageCatalog</h1>
    </LayoutWrapper>
  </main>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  gap: 4.5rem
  &__wrapper
    display: flex
    align-items: center
    gap: 4.5rem
</style>
