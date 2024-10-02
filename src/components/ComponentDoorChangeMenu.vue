<script setup>
import { onMounted, ref, watch } from 'vue'
import LayoutPopup from '@/layout/LayoutPopup.vue'
import FormMain from '@/layout/form/FormMain.vue'
import ComponentFormContent from '@/components/ComponentFormContent.vue'

const props = defineProps(['id', 'arr', 'foo', 'keys'])
const emit = defineEmits(['change'])
const id = ref(props.id)
const array = ref([])
const obj = ref(null)
const popupIsOpen = ref(false)

function init() {
  array.value.push(...props.arr)
}

onMounted(() => {
  init()
})

function changePopup() {
  popupIsOpen.value = !popupIsOpen.value
}

async function add() {
  const res = await props.foo.add(obj.value)
  array.value.push(res.data)
  id.value = res.data.id
}

function change() {
  emit('change', id.value)
  popupIsOpen.value = false
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
    <div @click="changePopup()" class="select__button-wrapper">
      <img src="@/assets/icons/add.svg" alt="add" />
    </div>
  </div>
  <LayoutPopup @popupIsClose="changePopup" :popupIsOpen="popupIsOpen">
    <FormMain @submit="add" class="form">
      <ComponentFormContent
        @change="(e) => (obj = e)"
        :title="'Добавить'"
        :keys="props.keys"
        :submit="'Создать'"
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
    right: -50px
</style>
