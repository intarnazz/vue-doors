<script setup>
import { onMounted, ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'

const token = ref('')

onMounted(() => {
  token.value = sessionStorage.getItem('token')
})
</script>

<template>
  <div class="admin box-x" v-if="token">
    <LayoutWrapper class="box-x">
      <div>ADMIN</div>
      <slot> </slot>
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
    color: #fff
    background-color: #000 !important
    font-size: 1rem
</style>
