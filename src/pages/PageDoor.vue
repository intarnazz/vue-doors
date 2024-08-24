<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionDoorMain from '@/components/sections/SectionDoorMain.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
const props = defineProps(['id'])
</script>

<template>
  <LayoutPage class="main">
    <LayoutWrapper class="flex">
      <SectionDoorMain :id="props.id" />
    </LayoutWrapper>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  gap: 3rem
</style>
