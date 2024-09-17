<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['id', 'arr'])
const emit = defineEmits(['change'])

const key = ref(props.id)

function change() {
  console.log(key.value)
  emit('change', props.arr[key.value].id)
}

watch(() => key.value, change)
</script>

<template>
  <div class="box-x select__wrapper">
    <select v-model="key" id="cars" name="cars">
      <option v-for="(value, key) in props.arr" :key="key" :value="key">
        {{ value.name }}
      </option>
    </select>
    <div class="select__button-wrapper">
      <img src="@/assets/icons/add.svg" alt="add" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.select
  &__wrapper
    position: relative
  &__button-wrapper
    position: absolute
    right: -50px
</style>
