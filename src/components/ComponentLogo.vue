<script setup>
const props = defineProps(['size'])
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <img v-if="props.size === 's'" src="@/assets/icons/logo_s.svg" alt="logo" />
    <img v-else-if="props.size === 'l'" src="@/assets/icons/logo_l.svg" alt="logo" />
  </RouterLink>
</template>

<style lang="sass" scoped></style>
