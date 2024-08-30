<script setup>
import ComponentDoors from '@/components/ComponentDoors.vue'
import ComponentCatalogFilters from '@/components/ComponentCatalogFilters.vue'
import { ref } from 'vue'

const props = defineProps(['mod'])
const filters = ref(null)

function filtersEmit(value) {
  filters.value = value
}
</script>

<template>
  <section class="catalog box-x">
    <ComponentCatalogFilters @filters="filtersEmit" />
    <div class="catalog__content catalog__grid">
      <ComponentDoors
        :mod="props.mod"
        :start="0"
        :end="12"
        :doorStyle="'mini'"
        :paging="true"
        :filters="filters"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.catalog
  align-items: flex-start
  gap: 3rem
  &__grid
    width: 100%
    display: grid
    grid-template-columns: 1fr  1fr  1fr 1fr
    gap: 2rem
</style>
