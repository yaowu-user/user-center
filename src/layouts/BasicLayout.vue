<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header style="padding: 0" class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://codefather.cn" target="_blank"> 从零开始的异世界生活 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'

// import { getCurrentUser } from '@/api/user'

// getCurrentUser().then((res) => {
//   console.log(res)
// })
</script>
<style scoped>
#basicLayout {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
#basicLayout .content {
  /* 去掉padding缩小留白，让内容占更大空间，实现放大效果 */
  padding: 4px;
  margin-bottom: 80px;
  background: linear-gradient(to right, #fefefe, #fff);
}

#basicLayout .header {
  background: white;
  margin-bottom: 16px;
}
</style>
