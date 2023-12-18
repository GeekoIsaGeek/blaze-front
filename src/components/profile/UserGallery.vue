<script lang="ts" setup>
import UserGalleryCard from '@/components/profile/UserGalleryCard.vue'
import { populateArrayForRendering } from '@/utils/array'
import { GALLERY_LIMIT } from '@/config/constants'
import { computed } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import { getPhotoUrl } from '@/helpers/string'

const userPhotos = useUserStore()?.user?.photos || []

const galleryItems = computed(() => [
  ...userPhotos,
  ...populateArrayForRendering(GALLERY_LIMIT - userPhotos.length, ['src'])
])
</script>

<template>
  <div class="overflow-auto max-h-[84vh] desktop:max-h-[650px]">
    <div class="flex flex-col items-start gap-3 py-4">
      <h3 class="font-semibold uppercase">Photos</h3>

      <div class="grid grid-cols-3 w-full gap-4">
        <UserGalleryCard
          v-for="item in galleryItems"
          :image="getPhotoUrl(item?.src)"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>
