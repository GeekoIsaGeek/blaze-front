import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

const fetchInterests = async () => {
  const response = await request.get('/api/interests', {
    headers: {
      Authorization: `Bearer ${getToken('auth')}`
    }
  })
  if (response.status === 200) {
    return response.data
  }
}

const saveSelectedInterest = async (id: number) => {
  try {
    const response = await request.post(
      `/api/user/interests/${id}/add`,
      {},
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

const deleteInterest = async (id: number) => {
  const response = await request.delete(`/api/user/interests/${id}/delete`, {
    headers: {
      Authorization: `Bearer ${getToken('auth')}`
    }
  })
  return response.status
}

export { fetchInterests, saveSelectedInterest, deleteInterest }
