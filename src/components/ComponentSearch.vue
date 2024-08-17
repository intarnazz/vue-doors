<script setup></script>

<template>
  <div class="flex search__wrapper">
    <div class="search box-x">
      <input
        v-model="text"
        class="flex"
        id="search"
        name="search"
        type="search"
        placeholder="search..."
        autocomplete="off"
      />
      <img src="@/assets/icons/search.svg" alt="search" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.search
  min-width: 275px
  border-bottom: 1px solid #000
  &__wrapper
    display: flex
    justify-content: flex-end
  & input
    border-radius: 100px
</style>
