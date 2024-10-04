<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps(['title', 'keys', 'submit', 'obj'])
const obj = ref(Object.fromEntries(props.keys.map((key) => [key, props.obj[key] || ''])))
const emit = defineEmits(['change'])

const submit = computed(() => {
  return props.submit || 'Создать'
})

function format(key) {
  switch (key) {
    case 'name':
      return 'Название'
    default:
      return key
  }
}

function change() {
  emit('change', obj.value)
}

Object.keys(obj.value).forEach((key) => {
  watch(() => obj.value[key], change)
})
</script>

<template>
  <h2>{{ props.title }}</h2>
  <ul class="box-y gap">
    <li v-for="(value, key) in obj" :key="key" class="box-x gap">
      <label :for="key">{{ format(key) }}</label>
      <div>
        <input v-model="obj[key]" :name="key" type="text" />
      </div>
    </li>
  </ul>
  <button class="button" type="submit">{{ submit }}</button>
</template>

<style lang="sass" scoped>
ul
  margin: 2rem 0
</style>
