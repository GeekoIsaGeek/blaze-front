import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

export const retrieveMatchedUserData = async (userId: string) => {
  if (!userId) throw new Error('userId is not defined')

  try {
    const response = await request.get(`/api/user/matches/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    if (response.status === 200) return response.data
  } catch (error) {
    console.log(error)
  }
}

export const unmatch = async (userId: string) => {
  if (!userId) throw new Error('userId is not defined')

  try {
    const { status } = await request.delete(`/api/user/matches/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return status
  } catch (error) {
    console.error(error)
  }
}
