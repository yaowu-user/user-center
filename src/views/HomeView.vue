<template>
  <div id="homePage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
const msg = '你很好看，我很喜欢'
</script>

<style scoped>
#homePage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
</style>
