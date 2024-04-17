<script lang="ts" setup>
import ArrowLeft from '@/components/icons/TheArrowLeft.vue'
import ArrowRight from '@/components/icons/TheArrowRight.vue'
import useIsMobile from '@/composables/useIsMobile'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore.ts'

const { isMobile } = useIsMobile()
const { showPreviousPhoto, showNextPhoto } = useMeetingPersonStore()
</script>
<template>
  <div class="w-full h-full top-0 absolute left-0 flex rounded-lg" v-if="isMobile">
    <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
    <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
  </div>

  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" v-else>
    <ArrowLeft
      class="w-12 h-12 absolute left-0 top-[45%] hover:scale-110 transitions cursor-pointer"
      @click="showPreviousPhoto()"
      @mousedown.stop
    />
    <ArrowRight
      class="w-12 h-12 absolute right-0 top-[45%] hover:scale-110 transitions cursor-pointer"
      @click="showNextPhoto()"
      @mousedown.stop
    />
  </div>
</template>
