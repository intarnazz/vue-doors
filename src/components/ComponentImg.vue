<script setup>
const API_URL = import.meta.env.VITE_API_URL
const props = defineProps(['src', 'alt'])
</script>

<template>
  <img
    :src="`${API_URL}image/${props.src}`"
    :alt="props.alt"
    @error="(event) => (event.target.src = `${API_URL}image/${props.src}`)"
  />
</template>

<style lang="sass" scoped></style>
