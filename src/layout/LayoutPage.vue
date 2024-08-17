<script setup></script>

<template>
  <main v-if="!loding" class="main box-y">
    <slot> </slot>
  </main>
</template>

<style lang="sass" scoped>
.main
  gap: 4.5rem
  justify-content: center
  align-items: center
</style>
