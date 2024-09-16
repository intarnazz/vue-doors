<script setup>
import FormMain from '@/layout/form/FormMain.vue'
</script>

<template>
  <FormMain>
    <div class="box-x">
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
  </FormMain>
</template>

<style lang="sass" scoped></style>
