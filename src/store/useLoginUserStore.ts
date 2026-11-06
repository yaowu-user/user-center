import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentUser } from '@/api/user'

export const useLoginUserStore = defineStore('useLoginUserStore', () => {
  const loginUser = ref<any>({
    username: '',
  })

  // 远程获取用户登录信息
  async function fetchLoginUser() {
    try {
      const res = await getCurrentUser()
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
      }
      // else {
      //   // 拿不到后端信息，3秒后设置小黑子
      //   setTimeout(() => {
      //     loginUser.value = { username: '小黑子', id: 1 }
      //     console.log('3秒到,设置小黑子')
      //   }, 3000)
      // }
    } catch (err) {
      // 请求报错（401属于这里），3秒后设置小黑子
      // setTimeout(() => {
      //   loginUser.value = { username: '小黑子', id: 1 }
      //   console.log('请求失败,3秒到,设置小黑子')
      // }, 100000)
    }
  }

  // 设置用户登录信息
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  // ✅ 重点：在这里直接调用，页面加载就执行这个函数！
  fetchLoginUser()

  return { loginUser, fetchLoginUser, setLoginUser }
})
