<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['name'])
</script>

<template>
  <RouterLink class="" :to="{ name: props.name }">
    <span style="border-bottom: 1px solid #000"> <slot> </slot> </span>
    ⏵
  </RouterLink>
</template>

<style lang="sass" scoped></style>
