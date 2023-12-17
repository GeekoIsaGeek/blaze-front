<script lang="ts" setup>
import ImageUploader from '@/components/UI/ImageUploader.vue'
import { ref } from 'vue'

const props = defineProps<{
  image?: string
}>()

const image = ref(props?.image)
</script>

<template>
  <div class="h-32 w-full bg-slate-100 rounded-xl cursor-pointer hover:grayscale-[20%] transitions">
    <img :src="image" class="w-full h-full object-cover rounded-xl" v-if="image" />
    <ImageUploader :image="image" @setImage="(selected) => (image = selected)" v-else />
  </div>
</template>
