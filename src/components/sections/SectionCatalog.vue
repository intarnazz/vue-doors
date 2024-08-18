<script setup>
import ComponentDoors from '@/components/ComponentDoors.vue'
import { onMounted, ref } from 'vue'
import { Getfilters } from '@/api/api.js'

const filters = ref({
  brand: [],
  material: []
})

async function init() {
  const res = await Getfilters()
  filters.value = res.data
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section class="catalog box-x">
    <aside class="catalog__filters">
      <ul class="box-y">
        <li class="box-y" v-for="(values, key) in filters" :key="key">
          <span style="font-weight: 600; color: #000; text-decoration: underline">{{ key }}</span>
          <ul class="box-y">
            <li v-for="(value, key) in values" :key="key">
              {{ value.name }}
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <div class="catalog__content catalog__grid">
      <ComponentDoors :start="0" :end="12" :doorStyle="'mini'" :paging="true" />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.catalog
  align-items: flex-start
  gap: 3rem
  &__filters
    position: sticky
    top: 4rem
  & ul
    gap: 1rem
    & li
      gap: 1rem
      color: #00000094
  &__grid
    width: 100%
    display: grid
    grid-template-columns: 1fr  1fr  1fr 1fr
    gap: 2rem
</style>
