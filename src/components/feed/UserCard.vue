<script setup lang="ts">
import UserCardButtons from '@/components/feed/UserCardButtons.vue'
import UserCardIndicators from '@/components/feed/UserCardIndicators.vue'
import ArrowDownCircle from '@/components/icons/TheArrowDownCircleIcon.vue'
import { computed, ref } from 'vue'
import UserDetails from '@/components/feed/UserDetails.vue'
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import { getPhotoUrl } from '@/helpers/string'
import { getClientPositions } from '@/helpers/browser'
import SwipeIndicator from '@/components/feed/SwipeIndicator.vue'
import SliderArrows from '@/components/feed/SliderArrows.vue'
import type { Person } from '@/types/MeetingPerson'

const props = defineProps<{
  userData: Person
}>()

const currentPhotoId = ref(0)
const currentPhoto = computed(() => props?.userData?.photos?.[currentPhotoId.value])
const showDetails = ref(false)

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
</script>

<template>
  <div
    class="w-full h-[84%] desktop:h-[82%] desktop:max-h-[82%] overflow-auto desktop:rounded-t-xl snap-y scroll-smooth absolute top-[8%] group"
    @mousedown="handleSwipeStart"
    @mouseup="handleSwipeEnd"
    @mousemove="handleSwiping"
    @touchstart="handleSwipeStart"
    @touchmove="handleSwiping"
    @touchend="handleSwipeEnd"
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

    <SwipeIndicator :cardStyles="cardStyles" />

    <UserCardIndicators :currentPhoto="currentPhoto" :photos="userData.photos" />

    <SliderArrows
      :photos="userData?.photos"
      :currentPhoto="currentPhoto"
      v-model:currentPhotoId="currentPhotoId"
    />

    <div
      class="px-[3%] absolute w-full bottom-0 py-4 z-10 select-none"
      @touchstart.stop
      @mousedown.stop
    >
      <TransitionWrapper idleClass="!-translate-x-14">
        <div v-show="!showDetails">
          <h1 class="text-3xl font-bold text-white flex justify-between items-center">
            <p>
              {{ userData?.username }}
              <span class="text-[22px] font-bold">{{ userData?.age }}</span>
            </p>
          </h1>
          <p class="text-white">
            {{ userData?.bio }}
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
    <UserDetails :showDetails="showDetails" :data="userData" @mousedown.stop @touchstart.stop />
  </div>
</template>
