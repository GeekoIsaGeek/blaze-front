<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getPosXConsideringLimits, getActualAge, getPositionFromAge } from '@/helpers/calculations'
import { useUserStore } from '@/stores/UserStore'
import useIsMobile from '@/composables/useIsMobile'
import { MAX_AGE, MIN_AGE } from '@/config/constants'

const emit = defineEmits<{
  handleAgeRangeChange: [from: number, to: number]
}>()

const minAgeController = ref()
const maxAgeController = ref()
const wrapper = ref()

const isSliding = ref(false)
const { isMobile } = useIsMobile()

const minAge = ref(useUserStore().user?.preference.age_from || MIN_AGE)
const maxAge = ref(useUserStore().user?.preference.age_to || MAX_AGE)

onMounted(() => {
  const minPosX = getPositionFromAge(minAge.value, wrapper.value.getBoundingClientRect().width)
  const maxPosX = getPositionFromAge(
    maxAge.value - (isMobile.value ? 6 : 4),
    wrapper.value.getBoundingClientRect().width
  )
  const elementWidth = maxAgeController.value.getBoundingClientRect().width

  if (minPosX) {
    minAgeController.value.style.left = Math.max(minPosX, elementWidth) + 'px'
  }
  if (maxPosX) {
    maxAgeController.value.style.left = Math.max(minPosX + elementWidth, maxPosX) + 'px'
  }
})

const handleSliding = (event: MouseEvent | TouchEvent, initiator: 'from' | 'to') => {
  if (!isSliding.value || (initiator !== 'from' && initiator !== 'to')) return

  const wrapperRect = wrapper.value.getBoundingClientRect()
  const elementWidth = minAgeController.value.getBoundingClientRect().width
  let posX: number

  if (event instanceof TouchEvent) {
    posX = event.touches[0].pageX - wrapperRect.left - elementWidth / 2
  } else {
    posX = event.clientX - wrapperRect.left - elementWidth / 2
  }

  if (initiator === 'from') {
    const pos = getPosXConsideringLimits({
      posX,
      leftLimit: 0,
      rightLimit: maxAgeController.value.offsetLeft - elementWidth
    })

    minAgeController.value.style.left = `${pos}px`
    minAge.value = getActualAge(pos / wrapperRect.width)
  } else {
    const pos = getPosXConsideringLimits({
      posX,
      leftLimit: minAgeController.value.offsetLeft + elementWidth,
      rightLimit: wrapperRect.width - elementWidth
    })

    maxAgeController.value.style.left = `${pos}px`
    maxAge.value = getActualAge(pos / wrapperRect.width) + (isMobile.value ? 6 : 4)
  }

  emit('handleAgeRangeChange', minAge.value, maxAge.value)
}
</script>
<template>
  <div class="p-4 border-b border-slate-300">
    <div class="flex items-center justify-between text-lg">
      <p>Age Preference</p>
      <span>{{ minAge }} - {{ maxAge }}</span>
    </div>

    <div class="py-4 relative" ref="wrapper">
      <div class="h-[0.2rem] w-full bg-slate-400 rounded-full absolute"></div>
      <button
        aria-label="age_from"
        type="button"
        class="w-7 h-7 bg-white border border-slate-300 outline-none rounded-full hover:border-pinkishRed shadow-md absolute bottom-0"
        ref="minAgeController"
        @mousedown="isSliding = true"
        @mouseup="isSliding = false"
        @touchstart="isSliding = true"
        @touchend="isSliding = false"
        @touchmove="(e) => handleSliding(e, 'from')"
        @mousemove="(e) => handleSliding(e, 'from')"
      ></button>
      <button
        aria-label="age_to"
        type="button"
        class="w-7 h-7 bg-white border border-slate-300 outline-none rounded-full hover:border-pinkishRed shadow-md absolute bottom-0 right-0"
        ref="maxAgeController"
        @mousedown="isSliding = true"
        @mouseup="isSliding = false"
        @touchstart="isSliding = true"
        @touchend="isSliding = false"
        @touchmove="(e) => handleSliding(e, 'to')"
        @mousemove="(e) => handleSliding(e, 'to')"
      ></button>
    </div>
  </div>
</template>
