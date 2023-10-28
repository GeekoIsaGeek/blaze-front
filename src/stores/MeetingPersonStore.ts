import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Person } from '@/types/MeetingPerson'

export const useMeetingPersonStore = defineStore('meetingPerson', () => {
  const person = ref<Person>({
    name: '',
    age: '',
    about: '',
    photos: [
      'https://randomwordgenerator.com/img/picture-generator/52e3d1414d53af14f1dc8460962e33791c3ad6e04e507749742c78d6924ec4_640.jpg',
      'https://randomwordgenerator.com/img/picture-generator/53e1d74a4950ac14f1dc8460962e33791c3ad6e04e5074417c2f7dd49345c7_640.jpg',
      'https://randomwordgenerator.com/img/picture-generator/52e4d545485ba814f1dc8460962e33791c3ad6e04e5074417d2d73d3954cc1_640.jpg'
    ]
  })

  const currentPhoto = ref(person.value.photos[0])

  const showNextPhoto = () => {
    const photos = person.value.photos
    const currentPhotoIndex = photos.indexOf(currentPhoto.value)

    if (photos.length - 1 > currentPhotoIndex) {
      currentPhoto.value = photos[currentPhotoIndex + 1]
    }
  }
  const showPreviousPhoto = () => {
    const photos = person.value.photos
    const currentPhotoIndex = photos.indexOf(currentPhoto.value)

    if (currentPhotoIndex > 0) {
      currentPhoto.value = photos[currentPhotoIndex - 1]
    }
  }
  return { person, currentPhoto, showNextPhoto, showPreviousPhoto }
})
