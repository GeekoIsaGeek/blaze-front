import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import type { Message } from '@/types/Chats'

export const retrieveChatPreviews = async () => {
  try {
    const response = await request.get('/api/chats/previews', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const retrieveMessages = async (chatId: string) => {
  try {
    if (!chatId) throw new Error('chatId is not defined')

    const response = await request.get(`/api/chats/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data as Message[]
  } catch (error) {
    console.error(error)
  }
}

export const getChatId = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId is not defined')

    const response = await request.post(
      `/api/chats/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const sendMessage = async (receiverId: number, message: string) => {
  try {
    if (!receiverId || !message)
      throw new Error('Make sure you are passing valid <receiverId> and <message> arguments')

    const response = await request.post(
      `/api/messages`,
      { content: message, receiver_id: receiverId },
      {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      }
    )
    return response.status
  } catch (error) {
    console.error(error)
  }
}
