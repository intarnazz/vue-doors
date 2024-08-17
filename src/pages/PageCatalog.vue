<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import HeaderCatalog from '@/layout/header/HeaderCatalog.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
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
  <main v-if="!loding" class="main flex box-y">
    <HeaderCatalog class="" />
    <LayoutWrapper class="flex main__wrapper">
      <section class="catalog">
        <aside class="catalog__filters">
          <ul class="box-y">
            <li class="box-y" v-for="(values, key) in filters" :key="key">
              <span style="font-weight: 600; color: #000;">{{ key }}</span>
              <ul class="box-y">
                <li v-for="(value, key) in values" :key="key">
                  {{ value.name }}
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <div class="catalog__content"></div>
      </section>
    </LayoutWrapper>
  </main>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  gap: 2.5rem
  & ul 
    gap: 1rem
    & li 
      gap: 1rem
      color: #00000094
  &__wrapper
    margin: auto
    gap: 4.5rem
</style>
