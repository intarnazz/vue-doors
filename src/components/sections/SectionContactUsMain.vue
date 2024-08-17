<script setup>
// import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { ref } from 'vue'

const licks = ref([
  {
    img: 'src/assets/icons/link/phone.svg',
    name: 'Телефон',
    text: '8 (900) 480-78-44',
    href: 'http://localhost:5173/contact-us'
  },
  {
    img: 'src/assets/icons/link/mail.svg',
    name: 'Email',
    text: 'misha.vidiakin@gmail.com',
    href: 'http://localhost:5173/contact-us'
  },
  {
    img: 'src/assets/icons/link/VK.svg',
    name: 'VK',
    text: '@literature_jenena',
    href: 'http://localhost:5173/contact-us'
  },
  {
    img: 'src/assets/icons/link/Telegram.svg',
    name: 'Telegram',
    text: '@Ortodox',
    href: 'http://localhost:5173/contact-us'
  },
  {
    img: 'src/assets/icons/link/Instagram.svg',
    name: 'Instagram',
    text: '@NotNot',
    href: 'http://localhost:5173/contact-us'
  }
])
</script>

<template>
  <section class="contact box-x">
    <aside class="box-y contact__wrapper flex">
      <h2 class="sans">Наши <span style="color: #00774d">контакты</span></h2>
      <ul class="box-y">
        <li v-for="(lick, key) in licks" :key="key">
          <a class="box-x contact__item" :href="lick.href">
            <img :src="lick.img" :alt="lick.name" />
            <div class="box-y">
              <p>{{ lick.name }}</p>
              <p>{{ lick.text }}</p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
    <iframe
      class="map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae2ff0a6948c4186f54386ce66dcc329d251be0e334d3b97847d7185c2f290866&amp;source=constructor"
      width="565"
      height="719"
      frameborder="0"
    ></iframe>
  </section>
</template>

<style lang="sass" scoped>
.sans
  font-size: 2.5rem
  margin: 2rem 0
.map
  width: 100%
  height: calc( 100dvh - 70px )
.contact
  overflow: hidden
  width: 100%
  align-items: flex-start
  & ul
    gap: 1rem
  &__item
    justify-content: flex-start
    gap: 2rem
    font-size: 1rem
    transition: .2s
    padding: 1rem
    border-radius: 10px
    outline: 3px solid #00000000
    margin-left: -1rem
    &:hover
      background-color: #e5f0ec
      outline: 3px solid #00774d
  &__wrapper
    justify-content: flex-start
    gap: 1.6rem
    padding: 0 4rem
    & img
      width: 32px
  &__box-decor
    position: absolute
    &_box
      z-index: 1
      background-color: #6DE1C2
      width: 365px
      height: 798px
      border-radius: 42px
      right: -140px
      top: 0px
    &_line
      z-index: 2
      right: 0
      top: 286px
</style>
