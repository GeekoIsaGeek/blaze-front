<script setup lang="ts">
import type { Photo } from '@/types/Pinia'

defineProps<{
  currentPhoto: Photo
  photos: Photo[]
}>()
</script>

<template>
  <ul class="flex gap-1 px-4 absolute top-2 list-none w-full">
    <li
      v-for="(image, i) in photos"
      :key="i"
      :class="[
        'w-full h-[4px] rounded-full ',
        currentPhoto === image ? 'bg-white' : 'bg-[rgba(255,255,255,0.4)]'
      ]"
    ></li>
  </ul>
</template>
