<script setup lang="ts">
import TransitionWrapper from './TransitionWrapper.vue'
</script>
<template>
  <div
    class="w-full h-full max-h-[calc(100vh-9.5rem)] desktop:max-h-full overflow-y-auto text-gray-700 bg-gray-200 rounded-b-2xl flex flex-col gap-4 shadow-screen"
  >
    <TransitionWrapper appear>
      <slot />
    </TransitionWrapper>
  </div>
</template>
