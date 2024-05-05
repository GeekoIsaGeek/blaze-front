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

export const retrieveMessages = async (participantId: string) => {
  try {
    if (!participantId) throw new Error('participantId is not defined')

    const response = await request.get(`/api/chats/${participantId}/messages`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data as Message[]
  } catch (error) {
    console.error(error)
  }
}
