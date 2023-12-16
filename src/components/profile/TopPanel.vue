<script setup lang="ts">
import TheSettingsIcon from '@/components/icons/TheSettingsIcon.vue'
</script>

<template>
  <div class="bg-white w-full py-5 px-3 flex justify-between">
    <p class="text-medium font-semibold text-slate-600">Edit profile</p>
    <div class="flex items-center gap-5">
      <button
        class="text-fadedPrimary border border-fadedPrimary text-md font-medium hover:bg-fadedPrimary hover:text-white rounded-md px-2 btnTransition"
      >
        Done
      </button>
      <TheSettingsIcon
        class="fill-slate-500 hover:fill-fadedPrimary hover:rotate-[30deg] cursor-pointer btnTransition w-7 h-7"
      />
    </div>
  </div>
</template>
