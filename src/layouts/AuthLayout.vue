<script setup lang="ts">
defineProps<{
  submitHandler: (e?: Event | undefined) => Promise<Promise<void> | undefined>
}>()
</script>
<template>
  <div class="flex items-center justify-center px-20 py-32 h-full w-full">
    <form @submit="submitHandler" class="w-3/4 flex flex-col items-center justify-center gap-3">
      <slot />
    </form>
  </div>
</template>
