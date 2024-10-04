<script setup>
import { onMounted, ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'

const token = ref('')

function logout() {
  sessionStorage.removeItem('token')
  window.location.href = '/'
}

onMounted(() => {
  token.value = sessionStorage.getItem('token')
})
</script>

<template>
  <div class="admin box-x" v-if="token">
    <LayoutWrapper class="box-x">
      <div>ADMIN</div>
      <slot> </slot>
      <button class="button button_w" @click="logout()">logout</button>
    </LayoutWrapper>
  </div>
</template>

<style lang="sass">
.admin
  background-color: hsl(133,59%,74%)
  padding: .5rem 0
  font-size: 2rem
  font-weight: 900
  color: #fff
  justify-content: center
  align-items: center
  & button
    font-size: 1rem
</style>
