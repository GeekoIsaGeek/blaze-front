<script lang="ts" setup>
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import GoBack from '@/components/icons/TheGoBackIcon.vue'
import { useRouter } from 'vue-router'

const { push: navigate } = useRouter()
</script>

<template>
  <div class="bg-white w-full py-4 px-3 rounded-t-3xl flex justify-center items-center select-none">
    <GoBack
      class="absolute top-4 left-4 w-7 h-7 transitions hover:scale-110 cursor-pointer"
      @click="navigate({ name: 'chats' })"
    />
    <div class="flex items-center">
      <TheFireIcon class="w-7 h-7 fill-primary" />
      <span class="text-textPrimary font-bold text-lg">Blaze</span>
    </div>
  </div>
</template>
