<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import LayoutPopup from '@/layout/LayoutPopup.vue'
import FormMain from '@/layout/form/FormMain.vue'
import ComponentFormContent from '@/components/ComponentFormContent.vue'

const props = defineProps(['id', 'arr', 'foo', 'keys'])
const emit = defineEmits(['change'])
const id = ref(props.id)
const array = ref([])
const obj = ref(null)
const method = ref(null)
const popupIsOpen = ref(false)

function init() {
  array.value.push(...props.arr)
}

onMounted(() => {
  init()
})

const objId = computed(() => {
  return array.value.findIndex((e) => e.id === id.value)
})

const getMethod = computed(() => {
  return method.value + '' === edit + '' ? array.value[objId.value] : {}
})

function changeMethod(value) {
  method.value = value
  changePopup()
}

function changePopup() {
  popupIsOpen.value = !popupIsOpen.value
}

async function add() {
  const res = await props.foo.add(obj.value)
  array.value.push(res.data)
  id.value = res.data.id
}

async function edit() {
  const res = await props.foo.patch({ id: id.value, ...obj.value })
  array.value[objId.value] = res.data
  close()
}

function close() {
  popupIsOpen.value = false
}

function change() {
  emit('change', id.value)
  close()
}

watch(() => id.value, change)
</script>

<template>
  <div class="box-x select__wrapper">
    <select v-model="id" id="cars" name="cars">
      <option v-for="(value, key) in array" :key="key" :value="value.id">
        {{ value.name }}
      </option>
    </select>
    <div class="select__button-wrapper box-x gap">
      <img @click="changeMethod(add)" src="@/assets/icons/add.svg" alt="add" />
      <img @click="changeMethod(edit)" src="@/assets/icons/edit.svg" alt="edit" />
    </div>
  </div>
  <LayoutPopup @popupIsClose="changePopup" :popupIsOpen="popupIsOpen">
    <FormMain @submit="method" class="form">
      <ComponentFormContent
        @change="(e) => (obj = e)"
        :title="'Добавить'"
        :keys="props.keys"
        :submit="'Создать'"
        :obj="getMethod"
      />
    </FormMain>
  </LayoutPopup>
</template>

<style lang="sass" scoped>
.form
  color: #000
  background-color: #fff
  border-radius: 10px
  padding: 1rem
img
  cursor: pointer
.select
  &__wrapper
    position: relative
  &__button-wrapper
    position: absolute
    right: -80px
</style>
