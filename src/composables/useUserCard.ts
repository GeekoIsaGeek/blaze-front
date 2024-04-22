import { computed, ref } from 'vue'
import { getClientPositions } from '@/helpers/browser'
import type { Person } from '@/types/MeetingPerson'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { cardResetStyles } from '@/config/defaultValues'

const useUserCard = (userData: Person) => {
  const currentPhotoId = ref(0)
  const currentPhoto = computed(() => userData?.photos?.[currentPhotoId.value])
  const showDetails = ref(false)
  const { handleSwipe } = useMeetingPersonStore()

  const interaction = computed(() =>
    cardStyles.value.x === 0 ? null : cardStyles.value.x > 0 ? 'like' : 'dislike'
  )

  const isSwiping = ref(false)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const cardStyles = ref(cardResetStyles)

  const handleSwipeStart = (event: MouseEvent | TouchEvent) => {
    showDetails.value = false
    isSwiping.value = true
    const { posX, posY } = getClientPositions(event)

    offsetX.value = posX - cardStyles.value.x
    offsetY.value = posY - cardStyles.value.y - 50
  }

  const handleSwiping = (event: MouseEvent | TouchEvent) => {
    if (isSwiping.value) {
      const { posX, posY } = getClientPositions(event)

      cardStyles.value = {
        x: (posX - offsetX.value) / 16,
        y: (posY - offsetY.value) / 16,
        rotate: cardStyles.value.x * 0.8,
        opacity: 1
      }
    }
  }

  const handleSwipeEnd = () => {
    isSwiping.value = false

    const currentStyles = cardStyles.value

    if (interaction.value === 'dislike') {
      cardStyles.value = {
        x: currentStyles.x - 20,
        y: currentStyles.y + 100,
        rotate: currentStyles.rotate - 25,
        opacity: 0.5
      }
      setTimeout(() => handleSwipe(userData?.id, 'dislike'), 200)
    } else if (interaction.value === 'like') {
      cardStyles.value = {
        x: currentStyles.x + 20,
        y: currentStyles.y + 100,
        rotate: currentStyles.rotate + 25,
        opacity: 0.5
      }
      setTimeout(() => handleSwipe(userData?.id, 'like'), 200)
    } else {
      cardStyles.value = cardResetStyles
    }
  }

  return {
    currentPhoto,
    interaction,
    handleSwipeStart,
    handleSwiping,
    handleSwipeEnd,
    cardStyles,
    currentPhotoId,
    showDetails,
    handleSwipe,
    isSwiping
  }
}

export default useUserCard
