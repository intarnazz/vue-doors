<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const defaultWrapperClass = 'wrapper'

const specialRouteClass = 'special-wrapper'

const route = useRoute()

const wrapperClass = computed(() => {
  return route.path === '/contact-us' ? specialRouteClass : defaultWrapperClass
})

// watchEffect(() => {
//   console.log('Маршрут изменился:', route.path)
//   if (route.path === '/special-route') {
//     // 
//   }
// })
</script>

<template>
  <div :class="wrapperClass">
    <slot> </slot>
  </div>
</template>

<style lang="sass" scoped>
.special-wrapper
  margin: 0 4rem

.wrapper
  width: 1300px
  margin: auto

@media screen and (max-width: 1440px)
  .wrapper
    width: auto
    margin: 0
    padding: 0 75px

@media screen and (max-width: 590px)
  .wrapper
    width: auto
    margin: 0
    padding: 0
</style>
