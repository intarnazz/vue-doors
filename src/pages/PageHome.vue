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
    <div class="box-y gap2 opener__bg">
      <LayoutWrapper class="flex box-y main__wrapper">
        <SectionOpener />
      </LayoutWrapper>
      <SectionDoorsSliderNonTarget />
    </div>
    <LayoutWrapper class="flex box-y main__wrapper">
      <SectionDoors />
    </LayoutWrapper>
    <SectionContacts style="width: 100%" />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.opener
  &__bg
    gap: 4rem
    padding-top: 6dvh
    background: linear-gradient(to bottom, #f8f7f3 85%, #fff 85%)
.box-y
  align-items: center
.main
  gap: 6rem
</style>
