<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import ComponentDoorChangeMenu from '@/components/ComponentDoorChangeMenu.vue'
import { title, price } from '@/utilte/utilte.js'
import LayoutPopup from '@/layout/LayoutPopup.vue'
import FormMain from '@/layout/form/FormMain.vue'
import ComponentFormContent from '@/components/ComponentFormContent.vue'
import { PatchComponent, DeleteComponent, GetComponent, AddComponent } from '@/api/api.js'

const props = defineProps(['door', 'admin'])
const emit = defineEmits(['save'])
const door = ref(props.door)
const components = ref([])
const isLoding = ref(true)
const popupIsOpen = ref(false)
const obj = ref({})
const selectComponent = ref(NaN)

async function init() {
  isLoding.value = true
  door.value = props.door
  door.value.components = door.value.components.map((i) => (i = { ...i, count: 1 }))
  if (props.admin) {
    const res = await GetComponent()
    components.value = res.data
    components.value = components.value.filter(
      (component) =>
        ![...door.value.components]
          .map((doorComponent) => doorComponent.name)
          .includes(component.name)
    )
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
  PatchComponent({ id: id, door_id: door.value.id, ...obj })
  emit('save')
}

async function componentAdd() {
  const resAddComponent = await AddComponent(obj.value)
  if (resAddComponent.success) {
    console.log(resAddComponent)
    const resPatchComponent = await PatchComponent({
      id: resAddComponent.data.id,
      door_id: door.value.id,
      ...obj.value
    })
    console.log(resPatchComponent)
    if (resPatchComponent.success) {
      emit('save')
    }
  }
}

function changePopup() {
  popupIsOpen.value = !popupIsOpen.value
  console.log(popupIsOpen.value)
}

// watch
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
            @save="emit('save')"
            @change="componentChange"
            :door_id="door.id"
            :arr="door.components"
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

      <li v-if="admin" class="box-x calculator__item gap2">
        <div class="box-x gap2">
          <select v-model="selectComponent" name="" id="">
            <option v-for="(value, key) in components" :key="key" :value="value">
              {{ value.name }}
            </option>
          </select>

          <button
            @click="
              componentChange(selectComponent.id, {
                name: selectComponent.name,
                price: selectComponent.price
              })
            "
            class="button button_w box-x"
          >
            <img src="@/assets/icons/add_b.svg" alt="add" />
            <p>добавить выбранный</p>
          </button>

          <button @click="changePopup()" class="button button_w box-x">
            <img src="@/assets/icons/add_b.svg" alt="add" />
            <p>создать новый</p>
          </button>
        </div>
      </li>
    </ul>

    <LayoutPopup @popupIsClose="changePopup" :popupIsOpen="popupIsOpen">
      <FormMain @submit="componentAdd" class="form">
        <ComponentFormContent
          @change="(e) => (obj = e)"
          :title="'Добавить'"
          :keys="['name', 'price']"
          :submit="'создать'"
          :obj="{}"
        />
      </FormMain>
    </LayoutPopup>
  </div>
</template>

<style lang="sass" scoped>
.form
  color: #000
  background-color: #fff
  border-radius: 10px
  padding: 1rem
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
