<script setup lang="ts">
import request from '@/config/axiosInstance'
import { useUserStore } from '@/stores/UserStore'
import { useRouter } from 'vue-router'
import { removeToken } from '@/helpers/tokens'

const { clearUser } = useUserStore()
const router = useRouter()

const logoutHandler = async () => {
  try {
    await request.post('/api/logout')
    router.push({ name: 'login' })
    removeToken('auth')
    clearUser()
  } catch (error) {
    return
  }
}
</script>

<template>
  <button @click="logoutHandler">Logout</button>
</template>
