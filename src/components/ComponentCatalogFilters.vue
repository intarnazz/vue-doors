<script setup>
import { onMounted, ref } from 'vue'
import { Getfilters } from '@/api/api.js'
import { title } from '@/utilte/utilte.js'

const emit = defineEmits(['filters'])
const filters = ref({
  type_door: [
    { id: 1, name: 'interior', focus: true },
    { id: 2, name: 'entrance', focus: true }
  ]
})

async function init() {
  const res = await Getfilters()
  filters.value = { ...filters.value, ...res.data }
}

onMounted(async () => {
  await init()
})

function changeFocus(key, index) {
  filters.value[key][index].focus = !filters.value[key][index].focus
  emit(
    'filters',
    Object.fromEntries(
      Object.entries(filters.value).map(([key, arr]) => [
        key,
        arr.filter((item) => item.focus === true)
      ])
    )
  )
}
</script>

<template>
  <aside class="filters">
    <ul>
      <li class="box-y gap" v-for="(values, key) in filters" :key="key">
        <span style="font-weight: 600; color: #000">{{ title(key) }}</span>
        <ul class="box-y">
          <li
            @click="changeFocus(key, index)"
            :class="{
              filters__focus: filters[key][index].focus
            }"
            v-for="(value, index) in values"
            :key="index"
            class="box-x filters__item gap"
          >
            {{ title(value.name) }}
            <div class="filters__checkbox box-y">
              <img src="@/assets/img/store_checkbox_blue.png" alt="checkbox" />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style lang="sass" scoped>
$gradient1: hsl(133, 28%, 50%)
$gradient2: hsl(133, 0%, 25%)
.filters
  background-color: #00000006
  position: sticky
  top: 7dvh
  max-height: 81dvh
  overflow: auto
  user-select: none
  &__checkbox
    overflow: hidden
    width: 15px
    height: 15px
    min-width: 15px
    min-height: 15px
    justify-content: flex-start
  &__focus
    background: $gradient1
    background: -moz-linear-gradient(-60deg, $gradient1 0%, $gradient2 100%)
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, $gradient1), color-stop(100%, $gradient2))
    background: -webkit-linear-gradient(-60deg, $gradient1 0%, $gradient2 100%)
    background: -o-linear-gradient(-60deg, $gradient1 0%, $gradient2 100%)
    background: -ms-linear-gradient(-60deg, $gradient1 0%, $gradient2 100%)
    background: linear-gradient(135deg, $gradient1 0%, $gradient2 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$gradient1', endColorstr='$gradient2',GradientType=1 )
    color: #fff
    & .filters
      &__checkbox
        justify-content: flex-end
  & li
    padding: .5rem 1rem
    cursor: pointer
</style>
