import type { Interest, User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isAuthenticated = computed(() => !!user.value?.id)

  const retrieveUserData = async () => {
    try {
      const response = await request.get('/api/user', {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      })
      user.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  const updatePhotos = (imageObj: { id: number; url: string }) => {
    user.value!.photos = [...user.value!.photos, imageObj]
  }
  const removePhoto = (id: number) => {
    user.value!.photos = user.value!.photos.filter((photo) => photo.id !== id)
  }

  const clearUser = (): void => (user.value = undefined)

  const removeInterest = async (id: number) => {
    const response = await request.delete(`/api/user/interests/${id}/delete`, {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    if (response.status === 204) {
      user.value!.interests = user.value!.interests.filter((i) => i.id !== id)
    }
  }

  const addInterest = async (interest: Interest) => {
    try {
      const response = await request.post(
        `/api/user/interests/${interest.id}/add`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken('auth')}`
          }
        }
      )

      if (response.status === 201) {
        user.value!.interests = [...user.value!.interests, interest]
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user,
    isAuthenticated,
    retrieveUserData,
    clearUser,
    updatePhotos,
    removePhoto,
    addInterest,
    removeInterest
  }
})
