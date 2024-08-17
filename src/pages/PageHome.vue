<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
import SectionContacts from '@/components/sections/SectionContactUs.vue'
import SectionDoors from '@/components/sections/SectionDoors.vue'
import SectionDoorsSliderNonTarget from '@/components/sections/SectionDoorsSliderNonTarget.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionOpener />
    </LayoutWrapper>
    <SectionDoorsSliderNonTarget />
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionDoors />
    </LayoutWrapper>
    <SectionContacts style="width: 100%" />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  margin: 4rem 0
</style>
