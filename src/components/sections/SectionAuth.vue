<script setup>
import FormMain from '@/layout/form/FormMain.vue'
import { auth } from '@/api/api.js'
import { ref } from 'vue'

const login = ref('admin')
const password = ref('admin')

async function submit() {
  const res = await auth({ login: login.value, password: password.value })
  sessionStorage.setItem('token', res.token)
  if (res.success) {
    window.location.href = '/'
  }
}
</script>

<template>
  <section class="auth box-x">
    <img src="@/assets/img/bg.jpg" alt="bg" />
    <div class="box-y gap2">
      <h1>Авторизация</h1>
      <FormMain @submit="submit" class="form-main">
        <div class="">
          <input
            v-model="login"
            class="flex"
            id="login"
            name="login"
            type="login"
            placeholder="login..."
          />
        </div>
        <div>
          <input
            v-model="password"
            class="flex"
            id="password"
            name="password"
            type="password"
            placeholder="password..."
          />
        </div>
        <button type="submit" class="button">войти</button>
      </FormMain>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.form-main
  & div
    margin: 1rem 0
.box-y
  align-items: flex-start
.auth
  & > div
    position: relative
    z-index: 2
    background-color: #fff
    border-radius: 10px
    padding: 2rem 2rem

  & img
    z-index: 1
    position: absolute
    width: 100dvw
    height: 100dvh
    object-fit: cover
    top: 0
    left: 0
</style>
