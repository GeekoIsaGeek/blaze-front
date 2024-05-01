import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

export const RetrieveMatchedUserData = async (userId: string) => {
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
