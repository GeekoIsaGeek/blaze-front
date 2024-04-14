import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'
import type { ProfileForm, UpdatedPreferences } from '@/types/Forms'
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

const updateUser = async (payload: ProfileForm) => {
  try {
    const response = await request.put('/api/user', payload, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.status
  } catch (error) {
    console.error(error)
  }
}

const updatePreferences = async (preferences: UpdatedPreferences) => {
  try {
    const response = await request.put('/api/user/preferences', preferences, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.status
  } catch (error) {
    console.error(error)
  }
}

const logoutUser = async () => {
  try {
    const { status } = await request.post(
      '/api/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      }
    )
    return status
  } catch (error) {
    console.error(error)
  }
}

const deleteUser = async () => {
  try {
    const { status } = await request.delete('/api/user', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return status
  } catch (error) {
    console.error(error)
  }
}

export {
  retrieveUser,
  updateUserGender,
  addNewLanguage,
  deleteLanguage,
  updateUser,
  updatePreferences,
  logoutUser,
  deleteUser
}
