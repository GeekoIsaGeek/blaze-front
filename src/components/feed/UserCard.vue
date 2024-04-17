<script setup lang="ts">
import UserCardButtons from '@/components/feed/UserCardButtons.vue'
import UserCardIndicators from '@/components/feed/UserCardIndicators.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'
import ArrowDownCircle from '@/components/icons/TheArrowDownCircleIcon.vue'
import { ref } from 'vue'
import UserDetails from '@/components/feed/UserDetails.vue'
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import { getPhotoUrl } from '@/helpers/string'
import { getClientPositions } from '@/helpers/browser'

const { showNextPhoto, showPreviousPhoto } = useMeetingPersonStore()
const { currentUser } = storeToRefs(useMeetingPersonStore())
const { currentPhoto } = storeToRefs(useMeetingPersonStore())
const showDetails = ref(false)

const isDragging = ref(false)
const offsetX = ref(0)
const offsetY = ref(0)
const cardStyles = ref({
  x: 0,
  y: 3.5,
  rotate: 0
})

const handleDragStart = (event: MouseEvent | TouchEvent) => {
  showDetails.value = false
  isDragging.value = true
  const { posX, posY } = getClientPositions(event)

  offsetX.value = posX - cardStyles.value.x
  offsetY.value = posY - cardStyles.value.y - 50
}

const handleDragging = (event: MouseEvent | TouchEvent) => {
  if (isDragging.value) {
    const { posX, posY } = getClientPositions(event)

    cardStyles.value.x = (posX - offsetX.value) / 16
    cardStyles.value.y = (posY - offsetY.value) / 16
    cardStyles.value.rotate = cardStyles.value.x * 0.65
  }
}

const handleDragEnd = () => {
  isDragging.value = false
  cardStyles.value.x = 0
  cardStyles.value.y = 3.5
  cardStyles.value.rotate = 0
}
</script>

<template>
  <div
    class="w-full h-[86%] desktop:h-[82%] desktop:max-h-[82%] overflow-auto desktop:rounded-xl snap-y scroll-smooth absolute top-[8%]"
    @mousedown="handleDragStart"
    @mouseup="handleDragEnd"
    @mousemove="handleDragging"
    @touchstart="handleDragStart"
    @touchmove="handleDragging"
    @touchend="handleDragEnd"
    :style="{
      left: cardStyles.x + 'rem',
      top: cardStyles.y + 'rem',
      transform: `rotate(${cardStyles.rotate}deg)`
    }"
  >
    <div
      class="bg-gradient-to-t from-black/80 desktop:from-black/60 from-20% to-60% to-transparent w-full h-full absolute top-0 left-0"
    ></div>

    <img
      :src="getPhotoUrl(currentPhoto?.url)"
      class="h-full w-full rounded-t-xl object-cover select-none"
    />
    <p
      class="absolute top-[100px] right-[30%] text-5xl font-medium text-pinkishRed border-[5px] px-4 py-1 rounded-lg border-pinkishRed uppercase transitions"
      :class="[
        cardStyles.x < 0 ? 'text-pinkishRed border-pinkishRed' : 'text-trueGreen border-trueGreen'
      ]"
      v-show="cardStyles.x !== 0"
    >
      {{ cardStyles.x > 0 ? 'LIKE' : 'NOPE' }}
    </p>
    <UserCardIndicators />

    <div class="w-full h-full top-0 absolute left-0 flex rounded-lg">
      <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
      <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
    </div>

    <div class="px-[3%] absolute w-full bottom-0 py-4 z-10 select-none">
      <TransitionWrapper idleClass="!-translate-x-14">
        <div v-show="!showDetails">
          <h1 class="text-3xl font-bold text-white flex justify-between items-center">
            <p>
              {{ currentUser?.username }}
              <span class="text-[22px] font-bold">{{ currentUser?.age }}</span>
            </p>
          </h1>
          <p class="text-white">
            {{ currentUser?.bio }}
          </p>
        </div>
      </TransitionWrapper>

      <UserCardButtons />
      <ArrowDownCircle
        class="w-7 h-7"
        @click="showDetails = !showDetails"
        :class="[
          showDetails ? 'rotate-90' : '-rotate-90',
          'transitions hover:scale-110 cursor-pointer absolute right-6 bottom-6 shadow-lg rounded-full'
        ]"
      />
    </div>
    <UserDetails :showDetails="showDetails" />
  </div>
</template>
