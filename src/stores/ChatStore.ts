import { retrieveChatPreviews } from '@/services/Chat'
import type { ChatPreview } from '@/types/Chats'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chat', () => {
  const chats = ref<ChatPreview[]>()

  const getChats = async () => {
    const data = await retrieveChatPreviews()
    chats.value = data
  }

  const getProfilePic = (userId: number) => {
    return chats?.value?.find((chat) => chat.user_id === userId)?.photo
  }

  return { chats, getChats, getProfilePic }
})
