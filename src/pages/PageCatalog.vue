<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import HeaderCatalog from '@/layout/header/HeaderCatalog.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
import SectionCatalog from '@/components/sections/SectionCatalog.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import { ref } from 'vue'

const mod = ref('')
function mudEmit(value) {
  mod.value = value
}
</script>

<template>
  <LayoutPage class="main">
    <HeaderCatalog @mod="mudEmit" class="" />
    <LayoutWrapper class="flex main__wrapper">
      <SectionCatalog :mod="mod" />
    </LayoutWrapper>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  gap: 1rem
</style>
