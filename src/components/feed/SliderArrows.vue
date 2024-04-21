<script lang="ts" setup>
import ArrowLeft from '@/components/icons/TheArrowLeft.vue'
import ArrowRight from '@/components/icons/TheArrowRight.vue'
import useIsMobile from '@/composables/useIsMobile'
import type { Photo } from '@/types/Pinia'

const props = defineProps<{
  photos: Photo[]
  currentPhoto: Photo
  currentPhotoId: number
}>()

const emit = defineEmits<{
  'update:currentPhotoId': [id: number]
}>()

const { isMobile } = useIsMobile()

const showNextPhoto = () => {
  if (!props?.photos) return

  const photos = props?.photos

  if (photos.length - 1 > props?.currentPhotoId) {
    console.log()
    emit('update:currentPhotoId', props?.currentPhotoId + 1)
  }
}

const showPreviousPhoto = () => {
  if (!props?.photos) return

  if (props?.currentPhotoId > 0) {
    emit('update:currentPhotoId', props?.currentPhotoId - 1)
  }
}
</script>
<template>
  <div class="w-full h-full top-0 absolute left-0 flex rounded-lg" v-if="isMobile" @touchstop.stop>
    <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
    <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
  </div>

  <div
    class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"
    @mouseup.stop
    v-else
  >
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
