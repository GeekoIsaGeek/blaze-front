<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  hideModal: []
}>()

defineProps<{
  showModal: boolean
  className?: string
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

  if (deltaY === 1) {
    emit('hideModal')
    startY.value = 0
  }
}
const handleMouseUp = () => (startY.value = 0)
</script>

<template>
  <Transition
    enterFromClass="opacity-0"
    enterToClass="opacity-1 bottomSheetTransition"
    leaveFromClass="opacity-1 bottomSheetTransition"
    leaveToClass="opacity-0 bottomSheetTransition"
  >
    <div
      class="bg-black/30 w-full h-full max-h-[100vh] overflow-y-auto absolute top-0"
      @click="emit('hideModal')"
      v-if="showModal"
    >
      <Transition
        appear
        enter-from-class="opacity-0 translate-y-full"
        enter-to-class="opacity-100 translate-y-0 transition-all duration-500 delay-[0.25s] ease-out"
      >
        <div
          :class="[
            'bg-white h-4/5 w-full absolute bottom-0 rounded-t-xl shadow-xl flex flex-col select-none',
            className
          ]"
          @click.stop
        >
          <div
            class="w-full"
            @touchmove="handleTouchMove"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @mousedown="handleMouseDown"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseUp"
          >
            <div class="bg-gray-500 w-1/4 h-1 rounded-full my-2 mx-auto"></div>
          </div>
          <div class="px-4 py-5 max-h-full overflow-y-auto">
            <slot />
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
