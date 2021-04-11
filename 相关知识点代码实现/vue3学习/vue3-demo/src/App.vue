<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" :test-obj="testObj" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const testObj = reactive({ msg: 'test msg' })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>