<script setup lang="ts">
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheXIcon from '@/components/icons/TheXIcon.vue'
</script>

<template>
  <div class="flex w-full justify-center gap-5 flex-row-reverse mt-5">
    <button
      class="h-[44px] w-[44px] rounded-full bg-white hover:bg-green-700 transition-colors ease-out flex items-center justify-center"
    >
      <TheHeartIcon color="lightgreen" />
    </button>
    <button
      class="h-[44px] w-[44px] rounded-full bg-white hover:bg-red-800 flex transition-colors ease-out items-center justify-center"
    >
      <TheXIcon />
    </button>
  </div>
</template>
