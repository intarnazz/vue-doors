<script setup></script>

<template>
  <div class="wrapper">
    <slot> </slot>
  </div>
</template>

<style lang="sass" scoped>
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
