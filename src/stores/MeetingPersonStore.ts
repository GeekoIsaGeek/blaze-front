import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Person } from '@/types/MeetingPerson'
import { handleInteraction, getUsers } from '@/services/MeetingUsers'
import type { InteractionType } from '@/types/Unions'

export const useMeetingPersonStore = defineStore('meetingPerson', () => {
  const users = ref<Person[]>()
  const isLoading = ref(false)

  const getMeetingUsers = async () => {
    isLoading.value = true

    const data = await getUsers()
    users.value = data

    isLoading.value = false
  }

  const handleSwipe = async (userId: number, interactionType: InteractionType | null) => {
    if (!userId || !interactionType) return

    const replacerUsers = await handleInteraction(userId, interactionType)
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

  return { users, getMeetingUsers, isLoading, handleSwipe }
})
