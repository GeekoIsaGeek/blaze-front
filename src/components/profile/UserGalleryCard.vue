<script lang="ts" setup>
import ImageUploader from '@/components/UI/ImageUploader.vue'

defineProps<{
  image?: string
}>()
</script>

<template>
  <div class="h-32 w-full bg-slate-100 rounded-xl cursor-pointer hover:grayscale-[20%] transitions">
    <img :src="image" class="w-full h-full object-cover" v-if="image" />
    <ImageUploader v-else />
  </div>
</template>
