<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <footer class="footer box-shadow">
    <LayoutWrapper class="box-x footer__wrapper">
      <div class="flex">
        <img class="" src="" alt="LOGO" />
      </div>
      <nav class="box-x">
        <p>Каталог</p>
        <p>Контакты</p>
      </nav>
      <div class="box-x footer__web-wrapper flex">
        <p>Мы в соцсетях</p>
        <img src="@/assets/icons/link/VK.svg" alt="VK" />
        <img src="@/assets/icons/link/Telegram.svg" alt="Telegram" />
        <img src="@/assets/icons/link/Instagram.svg" alt="Instagram" />
      </div>
    </LayoutWrapper>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  font-size: 20px
  margin: 37px 0
  & nav
    gap: 1em
  &__web-wrapper
    justify-content: flex-end
    gap: 1rem
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem
</style>
