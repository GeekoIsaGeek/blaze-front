import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { type Person } from '@/types/MeetingPerson'
import { getUsers } from '@/services/MeetingUsers'

export const useMeetingPersonStore = defineStore('meetingPerson', () => {
  const users = ref<Person[]>([])
  const currentUser = computed(() => users.value[0])
  const isLoading = ref(false)

  const getMeetingUsers = async () => {
    isLoading.value = true

    const data = await getUsers()
    users.value = data

    isLoading.value = false
  }

  return { currentUser, users, getMeetingUsers, isLoading }
})
