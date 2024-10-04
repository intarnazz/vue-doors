<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import ComponentDoorChangeMenu from '@/components/ComponentDoorChangeMenu.vue'
import { title, price } from '@/utilte/utilte.js'
import { PatchComponent, DeleteComponent, GetComponent } from '@/api/api.js'

const props = defineProps(['door', 'admin'])
const door = ref(props.door)
const components = ref([])
const isLoding = ref(true)

async function init() {
  door.value = props.door
  door.value.components = door.value.components.map((i) => (i = { ...i, count: 1 }))
  if (props.admin) {
    const res = await GetComponent()
    components.value = res.data
  }
  isLoding.value = false
}

onMounted(() => {
  init()
})

const totalPrice = computed(() => {
  return price(
    door.value.components.reduce((sum, component) => sum + +component.price * +component.count, 0) +
      +door.value.price
  )
})

function priceChange(key, value) {
  door.value.components[key].count +=
    value > 0 ? value : door.value.components[key].count <= 0 ? 0 : value
}

async function componentChange(id, obj) {
  console.log(id)
  console.log(obj)
  PatchComponent({ id: id, door_id: door.value.id, ...obj })
}

function doorChange() {
  init()
}

watch(() => props.door, doorChange)
</script>

<template>
  <div v-if="!isLoding" class="box-y gap2 calculator">
    <h2>{{ totalPrice }}</h2>
    <ul class="box-y">
      <li class="box-x calculator__item gap2" v-for="(value, key) in door.components" :key="key">
        <p v-if="!props.admin">{{ title(value.name) }}</p>
        <div v-else class="">
          <ComponentDoorChangeMenu
            @change="componentChange"
            :arr="components"
            :id="value.id"
            :foo="{
              patch: PatchComponent,
              delete: DeleteComponent
            }"
            :keys="['name', 'price']"
          />
        </div>
        <hr v-if="!admin" class="flex" />
        <div class="box-x gap">
          <p>{{ price(value.price * value.count) }}</p>
          <div class="box-x calculator__price">
            <button @click="priceChange(key, -1)">-</button>
            <p>{{ value.count }}</p>
            <button @click="priceChange(key, 1)">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
h2
  font-size: 2rem

.calculator
  &__item
    background-color: hsl(164, 30%, 17%)
    color: #fff
    padding: .5rem 1rem
    border-radius: 0px
    &:first-child
      border-top-left-radius: 5px
      border-top-right-radius: 5px
    &:last-child
      border-bottom-left-radius: 5px
      border-bottom-right-radius: 5px
    & hr
      border: none
      border-top: 1px solid hsla(0, 0%, 100%, .5)
  &__price
    border-radius: 10px
    border: 1px solid hsl(164, 30%, 17%)
    & p
      padding: .25rem .5rem
    & button
      padding: .25rem 1rem
      border-radius: 8px
      transition: .2s
      font-size: 1.6rem
      color: #fff
      &:first-child
        border-bottom-right-radius: 0
        border-top-right-radius: 0
      &:last-child
        border-bottom-left-radius: 0
        border-top-left-radius: 0
      &:hover
        font-weight: 600
        color: #fff
        background-color: hsl(164, 30%, 40%)
</style>
