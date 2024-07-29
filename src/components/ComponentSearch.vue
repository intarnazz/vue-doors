<script setup></script>

<template>
  <div class="flex search__wrapper">
    <div class="search box-x">
      <img src="@/assets/icons/search.svg" alt="search" />
      <input
        v-model="text"
        class="flex"
        id="search"
        name="search"
        type="search"
        placeholder="search..."
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.search
  min-width: 275px
  background-color: #fff
  box-shadow: 0px 0px 10px 0px $mainColor
  border-radius: 100px
  padding: 0 .8em
  &__wrapper
    display: flex
    justify-content: flex-end
  & input
    padding: .6em 0
    border-radius: 100px
</style>
