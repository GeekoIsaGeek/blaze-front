import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

export const retrieveMatches = async () => {
  try {
    const response = await request.get('/api/user/matches', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const retrieveMatchedUserData = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId is not defined')

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
  try {
    if (!userId) throw new Error('userId is not defined')

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
