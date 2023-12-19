import type { User } from '@/types/Pinia'
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
      console.log(error)
      return
    }
  }

  const updatePhotos = (imageObj: { id: number; url: string }) => {
    user.value!.photos = [...user.value!.photos, imageObj]
  }
  const removePhoto = (id: number) => {
    user.value!.photos = user.value!.photos.filter((photo) => photo.id !== id)
  }

  const clearUser = (): void => (user.value = undefined)

  return { user, isAuthenticated, retrieveUserData, clearUser, updatePhotos, removePhoto }
})
