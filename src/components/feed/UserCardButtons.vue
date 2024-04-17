<script setup lang="ts">
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheXIcon from '@/components/icons/TheXIcon.vue'
</script>

<template>
  <div class="flex justify-center gap-5 flex-row-reverse mt-5 items-center">
    <button
      class="shadow-lg h-[44px] w-[44px] rounded-full bg-white hover:bg-green-700 transition-colors duration-300 ease-out flex items-center justify-center"
    >
      <TheHeartIcon color="lightgreen" />
    </button>
    <button
      class="shadow-lg h-[44px] w-[44px] rounded-full bg-white hover:bg-active flex transition-colors duration-300 ease-out items-center justify-center group/button"
    >
      <TheXIcon
        class="fill-active group-hover/button:fill-white transition-fill duration-[.4s] ease"
      />
    </button>
  </div>
</template>
