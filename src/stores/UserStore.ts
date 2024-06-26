import type { Interest, User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  addNewLanguage,
  deleteLanguage,
  retrieveUser,
  updatePreferences,
  updateUser,
  updateUserGender
} from '@/services/User'
import { deleteInterest, saveSelectedInterest } from '@/services/Interests'
import type { Language } from '@/types/Languages'
import type { ProfileForm, UpdatedPreferences } from '@/types/Forms'
import { removeToken } from '@/helpers/tokens'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isAuthenticated = computed(() => !!user.value?.id)

  const retrieveUserData = async () => {
    const data = await retrieveUser()
    user.value = data
  }

  const updatePhotos = (imageObj: { id: number; url: string }) => {
    user.value!.photos = [...user.value!.photos, imageObj]
  }
  const removePhoto = (id: number) => {
    user.value!.photos = user.value!.photos.filter((photo) => photo.id !== id)
  }

  const clearUser = (): void => {
    user.value = undefined
    removeToken('auth')
  }

  const removeInterest = async (id: number) => {
    const status = await deleteInterest(id)
    if (status === 204) {
      user.value!.interests = user.value!.interests.filter((i) => i.id !== id)
    }
  }

  const addInterest = async (interest: Interest) => {
    const status = await saveSelectedInterest(interest.id)
    if (status === 201) {
      user.value!.interests = [...user.value!.interests, interest]
    }
  }

  const updateGender = async (gender: User['gender']) => {
    const status = await updateUserGender(gender)
    if (status === 204) user.value!.gender = gender
  }

  const addLanguage = async (language: Language) => {
    const status = await addNewLanguage(language)
    if (status === 204) {
      user.value!.languages = [...(user.value!.languages || []), language].sort((a, b) =>
        a.localeCompare(b)
      )
    }
  }

  const deleteUserLanguage = async (language: Language) => {
    const status = await deleteLanguage(language)
    if (status === 204) {
      user.value!.languages = user.value!.languages.filter((lang) => lang !== language)
    }
  }

  const updateProfile = async (payload: ProfileForm) => {
    const status = await updateUser(payload)
    if (status === 204) {
      user.value = { ...user.value, ...payload } as User
    }
  }

  const updateUserPreferences = async (preferences: UpdatedPreferences) => {
    const status = await updatePreferences(preferences)
    if (status === 204) {
      user.value!.preference = { ...user.value!.preference, ...preferences }
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
    removeInterest,
    updateGender,
    addLanguage,
    deleteUserLanguage,
    updateProfile,
    updateUserPreferences
  }
})
