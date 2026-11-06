import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import UserRegisterPage from '@/pages/user/UserRegisterPage.vue'
import UserManagePage from '@/pages/admin/UserManagePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: 'userRegister',
      component: UserRegisterPage,
    },

    {
      path: '/admin/userManage',
      name: 'userManage',
      component: UserManagePage,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
