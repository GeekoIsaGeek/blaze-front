import type { User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = reactive<User | {}>({})

  return { user }
})
