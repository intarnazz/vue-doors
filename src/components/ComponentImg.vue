<script setup>
const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['src', 'alt'])
</script>

<template>
  <img
    v-if="props.src && props.alt"
    :src="`${API_URL}image/${props.src}`"
    :alt="props.alt"
    @error="(event) => (event.target.src = `${API_URL}image/${props.src}`)"
  />
  <div v-else class=""></div>
</template>

<style lang="sass" scoped>
img
  user-select: none
</style>
