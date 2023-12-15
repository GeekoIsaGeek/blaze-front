import type { User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = reactive<User | {}>({})
  const isAuthenticated = ref(false)

  return { user, isAuthenticated }
})
