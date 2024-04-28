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
