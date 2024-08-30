<script setup></script>

<template>
  <main v-if="!loding" class="main box-y flex">
    <slot> </slot>
  </main>
</template>

<style lang="sass" scoped>
.main
  gap: 4.5rem
  justify-content: flex-start
  align-items: center
</style>
