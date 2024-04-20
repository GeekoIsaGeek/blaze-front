import { computed, ref } from 'vue'
import { getClientPositions } from '@/helpers/browser'
import type { Person } from '@/types/MeetingPerson'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'

const useUserCard = (userData: Person) => {
  const currentPhotoId = ref(0)
  const currentPhoto = computed(() => userData?.photos?.[currentPhotoId.value])
  const showDetails = ref(false)
  const { handleDislike } = useMeetingPersonStore()

  const interaction = computed(() =>
    cardStyles.value.x === 0 ? null : cardStyles.value.x > 0 ? 'like' : 'dislike'
  )

  const isSwiping = ref(false)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const cardStyles = ref({
    x: 0,
    y: 3.5,
    rotate: 0
  })

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
        rotate: cardStyles.value.x * 0.8
      }
    }
  }

  const handleSwipeEnd = () => {
    isSwiping.value = false

    cardStyles.value = {
      x: 0,
      y: 3.5,
      rotate: 0
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
    handleDislike
  }
}

export default useUserCard
