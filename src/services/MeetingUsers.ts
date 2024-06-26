import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import type { InteractionType } from '@/types/Unions'

export const getUsers = async () => {
  try {
    const response = await request.get('/api/users', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const handleInteraction = async (userId: number, interactionType: InteractionType) => {
  try {
    const response = await request.post(
      `/api/user/${interactionType}s/add/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      }
    )
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}
