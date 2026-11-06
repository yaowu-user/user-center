<template>
  <div class="header-container">
    <div id="globalHeader">
      <a-row :wrap="false" style="width: 100%">
        <a-col flex="200px">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <div class="title">三笠真好看</div>
          </div>
        </a-col>
        <a-col flex="auto">
          <a-menu
            v-model:selectedKeys="current"
            mode="horizontal"
            :items="items"
            style="width: 100%; line-height: 64px"
            @click="doMemuClick"
          />
        </a-col>
        <a-col flex="none">
          <div class="user-login-status">
            <div v-if="loginUserStore.loginUser.id">
              {{ loginUserStore.loginUser.username ?? '无名' }}
            </div>
            <div v-else>
              <a-button type="primary" @click="goLogin" style="margin-right: 8px">登录</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  CrownOutlined,
} from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/store/useLoginUserStore'
const loginUserStore = useLoginUserStore()
const router = useRouter()
//点击菜单后的路由跳转事件
const doMemuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  })
}

const current = ref<string[]>(['/'])
//监听路由变化，更新当前菜单选中状态
router.afterEach((to) => {
  current.value = [to.path]
})

const items = ref<MenuProps['items']>([
  {
    key: '/app',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    icon: () => h(AppstoreOutlined),
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/user/register',
    icon: () => h(SettingOutlined),
    label: '用户注册',
    title: '用户注册',
  },
  {
    key: '/admin/userManage',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
])

// 新增：右上角登录按钮跳转
const goLogin = () => {
  router.push('/user/login')
}
</script>
<style scoped>
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
}
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
