<script lang="ts" setup>
import UserGalleryCard from '@/components/profile/UserGalleryCard.vue'
import { populateArrayForRendering } from '@/utils/array'
import photo from '/public/favicon.svg'
import { GALLERY_LIMIT } from '@/config/constants'
import { computed } from 'vue'

const images = [
  {
    src: photo,
    id: 546456
  }
]

const galleryItems = computed(() => [
  ...images,
  ...populateArrayForRendering(GALLERY_LIMIT - images.length, ['src'])
])
</script>

<template>
  <div class="overflow-auto max-h-[84vh] desktop:max-h-[650px]">
    <div class="flex flex-col items-start gap-3 py-4">
      <h3 class="font-semibold uppercase">Photos</h3>

      <div class="grid grid-cols-3 w-full gap-4">
        <UserGalleryCard v-for="item in galleryItems" :image="item?.src" :key="item.id" />
      </div>
    </div>
  </div>
</template>
