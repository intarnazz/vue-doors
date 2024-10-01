<script setup>
import { ref, watch } from 'vue'
import LayoutPopup from '@/layout/LayoutPopup.vue'
import FormMain from '@/layout/form/FormMain.vue'

const props = defineProps(['id', 'arr', 'foo'])
const emit = defineEmits(['change'])
const id = ref(props.id)
const name = ref('')
const popupIsOpen = ref(false)

function changePopup() {
  popupIsOpen.value = !popupIsOpen.value
}

function submit() {
  props.foo({ name: name.value })
}

function change() {
  emit('change', id.value)
}

watch(() => id.value, change)
</script>

<template>
  <div class="box-x select__wrapper">
    <select v-model="id" id="cars" name="cars">
      <option v-for="(value, key) in props.arr" :key="key" :value="value.id">
        {{ value.name }}
      </option>
    </select>
    <div @click="changePopup()" class="select__button-wrapper">
      <img src="@/assets/icons/add.svg" alt="add" />
    </div>
  </div>
  <LayoutPopup @popupIsClose="changePopup" :popupIsOpen="popupIsOpen">
    <FormMain @submit="submit" class="form">
      <h2>Добавление {{ title }}</h2>
      <ul class="box-y gap">
        <li class="box-x gap">
          <label for="name">Название</label>
          <div>
            <input v-model="name" name="name" type="text" />
          </div>
        </li>
      </ul>
      <button class="button" type="submit">Создать</button>
    </FormMain>
  </LayoutPopup>
</template>

<style lang="sass" scoped>
ul
  margin: 2rem 0
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
