import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import type { Language } from '@/types/Languages'
import type { User } from '@/types/Pinia'

const retrieveUser = async () => {
  try {
    const response = await request.get('/api/user', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data as User
  } catch (error) {
    console.error(error)
  }
}

const updateUserGender = async (gender: User['gender']) => {
  try {
    const response = await request.put(
      '/api/user/gender',
      { gender },
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

const addNewLanguage = async (language: Language) => {
  try {
    const response = await request.put(
      `/api/user/languages/${language}/add`,
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

const deleteLanguage = async (language: Language) => {
  try {
    const response = await request.delete(`/api/user/languages/${language}/delete`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.status
  } catch (error) {
    console.error(error)
  }
}

export { retrieveUser, updateUserGender, addNewLanguage, deleteLanguage }
