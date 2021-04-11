<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <p>{{testObj.msg}}</p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

const props = defineProps({
  msg: String,
  testObj:Object
})
const state = reactive({ count: 0 })
console.log(props.testObj)
setTimeout(()=>{
  props.testObj.msg = 'test update'
},1000)

</script>

<style scoped>
a {
  color: #42b983;
}
</style>