<script lang="ts" setup>
import TearyEyes from '@/components/icons/TheTearyEyesIcon.vue'
</script>

<template>
  <div class="flex h-full w-full justify-center items-center flex-col">
    <TearyEyes class="w-24 h-24" />
    <p class="my-10 text-2xl text-gray-700">No more options available!</p>
    <RouterLink
      :to="{ name: 'profile', query: { show_settings: 'true' } }"
      class="px-4 py-2 bg-fadedPrimary/90 text-white rounded-xl hover:bg-hotpink transitions"
    >
      Update Preferences
    </RouterLink>
  </div>
</template>
