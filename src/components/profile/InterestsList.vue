<script setup lang="ts">
import { onMounted, ref } from 'vue'
import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import type { User } from '@/types/Pinia'
import { useUserStore } from '@/stores/UserStore'

const interests = ref<User['interests']>([])
const searchString = ref('')
const filteredInterests = ref<typeof interests.value>([])
const userInterests = useUserStore().user?.interests

onMounted(() => {
  const getInterests = async () => {
    const response = await request.get('/api/interests', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    if (response.status === 200) {
      interests.value = response.data
      filteredInterests.value = response.data
    }
  }
  getInterests()
})

const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  searchString.value = input.value

  filteredInterests.value = interests.value.filter((obj) =>
    obj.interest.toLowerCase().startsWith(input.value.toLowerCase())
  )
}
</script>

<template>
  <input
    type="text"
    class="w-full my-5 border shadow-sm rounded-lg pl-3 py-[2px] border-slate-400 outline-0"
    placeholder="Search..."
    :value="searchString"
    @input="handleInput"
  />

  <ul class="flex items-center gap-1 flex-wrap" v-if="filteredInterests.length">
    <li
      v-for="obj in filteredInterests"
      :key="obj.id"
      :class="[
        'px-4 border shadow rounded-lg flex items-center gap-1 hover:bg-primary hover:text-white transitions hover:border-transparent cursor-pointer',
        userInterests?.find((interest) => interest.id === obj.id)
          ? 'border-fadedPrimary'
          : 'border-slate-300'
      ]"
    >
      {{ obj.interest }}
    </li>
  </ul>
</template>
