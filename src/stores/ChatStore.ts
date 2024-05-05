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

  const getProfilePic = (chatId: number) => {
    return chats?.value?.find((chat) => chat.chat_id === chatId)?.photo
  }

  const getChat = async (userId: number) => {
    if (!chats.value) {
      await getChats()
    }
    return chats?.value?.find((chat) => chat.user_id === userId)
  }

  return { chats, getChats, getProfilePic, getChat }
})
