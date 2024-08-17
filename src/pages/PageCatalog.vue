<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import HeaderCatalog from '@/layout/header/HeaderCatalog.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
import SectionCatalog from '@/components/sections/SectionCatalog.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
</script>

<template>
  <LayoutPage class="main">
    <HeaderCatalog class="" />
    <LayoutWrapper class="flex main__wrapper">
      <SectionCatalog />
    </LayoutWrapper>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  gap: 3rem
</style>
