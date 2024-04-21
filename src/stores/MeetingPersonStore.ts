import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Person } from '@/types/MeetingPerson'
import { addToDislikesList, getUsers } from '@/services/MeetingUsers'

export const useMeetingPersonStore = defineStore('meetingPerson', () => {
  const users = ref<Person[]>()
  const isLoading = ref(false)

  const getMeetingUsers = async () => {
    isLoading.value = true

    const data = await getUsers()
    users.value = data

    isLoading.value = false
  }

  const handleDislike = async (userId: number) => {
    if (!userId) return

    const replacerUsers = await addToDislikesList(userId)
    if (replacerUsers) {
      users.value = (() => {
        if (users.value && users.value?.length > 2) {
          return [...(users.value?.filter((user) => user.id !== userId) || []), ...replacerUsers]
        }
        return replacerUsers
      })()
    }
    return true
  }

  return { users, getMeetingUsers, isLoading, handleDislike }
})
