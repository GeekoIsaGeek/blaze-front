import type { User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import request from '@/config/axiosInstance'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isAuthenticated = computed(() => !!user.value?.id)

  const retrieveUserData = async () => {
    try {
      await request.get('/sanctum/csrf-cookie')
      const response = await request.get('/api/user')
      user.value = response.data
    } catch (error) {
      return
    }
  }

  const clearUser = (): void => (user.value = undefined)

  return { user, isAuthenticated, retrieveUserData, clearUser }
})
