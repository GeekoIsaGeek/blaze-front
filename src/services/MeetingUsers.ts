import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

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
