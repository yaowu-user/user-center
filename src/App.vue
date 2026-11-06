<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>
<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue'
import { useLoginUserStore } from './store/useLoginUserStore'
const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5; /* 可选：添加一点背景色让效果更好 */
}

#app {
  width: 100%;
  height: 100%;
}
</style>
