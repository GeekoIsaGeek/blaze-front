<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  hideModal: []
}>()

const isDragging = ref(false)
const startY = ref(0)

const handleTouchStart = (e: TouchEvent) => (startY.value = e.touches[0].clientY)

const handleTouchMove = (e: TouchEvent) => {
  const touchCurrentY = e.touches[0].clientY
  const delta = touchCurrentY - startY.value
  if (delta > 1) {
    isDragging.value = true
  } else {
    isDragging.value = false
  }
}
const handleTouchEnd = () => {
  startY.value = 0

  if (isDragging.value) {
    emit('hideModal')
  }
}

const handleMouseDown = (e: MouseEvent) => (startY.value = e.clientY)

const handleMouseMove = (e: MouseEvent) => {
  const deltaY = e.clientY - startY.value

  startY.value = 0

  if (deltaY === 1) {
    emit('hideModal')
  }
}
const handleMouseUp = () => (startY.value = 0)
</script>

<template>
  <div class="bg-black/30 w-full h-full absolute top-0" @click="emit('hideModal')">
    <div
      class="bg-white h-max w-full absolute bottom-0 rounded-t-xl shadow-xl flex flex-col"
      @click.stop
    >
      <div
        class="w-full cursor-grab"
        @touchmove="handleTouchMove"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
      >
        <div class="bg-gray-500 w-1/4 h-1 rounded-full my-2 mx-auto"></div>
      </div>
      <div class="px-4 pt-5">
        <slot />
      </div>
    </div>
  </div>
</template>
