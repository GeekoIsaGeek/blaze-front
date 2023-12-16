<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import request from '@/config/axiosInstance'
import { useRouter } from 'vue-router'

const user = useUserStore().user
const { clearUser } = useUserStore()
const router = useRouter()

const logoutHandler = async () => {
  try {
    await request.post('/api/logout')
    router.push({ name: 'login' })
    clearUser()
  } catch (error) {
    return
  }
}
</script>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    {{ user?.username }} <RouterLink :to="{ name: 'feed' }">Feed</RouterLink>
    <button @click="logoutHandler">Logout</button>
  </div>
</template>
