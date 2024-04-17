import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { type Person } from '@/types/MeetingPerson'
import { getUsers } from '@/services/MeetingUsers'

export const useMeetingPersonStore = defineStore('meetingPerson', () => {
  const users = ref<Person[]>([])
  const currentUser = computed(() => users.value[0])

  const getMeetingUsers = async () => {
    const data = await getUsers()
    users.value = data
  }

  const currentPhotoId = ref(0)
  const currentPhoto = computed(() => currentUser.value?.photos[currentPhotoId.value])

  const showNextPhoto = () => {
    if (!currentUser.value?.photos) return

    const photos = currentUser.value.photos

    if (photos.length - 1 > currentPhotoId.value) {
      currentPhotoId.value = currentPhotoId.value + 1
    }
  }

  const showPreviousPhoto = () => {
    if (!currentUser.value?.photos) return

    if (currentPhotoId.value > 0) {
      currentPhotoId.value = currentPhotoId.value - 1
    }
  }
  return { currentUser, currentPhoto, users, showNextPhoto, showPreviousPhoto, getMeetingUsers }
})
