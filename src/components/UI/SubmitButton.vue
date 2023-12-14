<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
  <button
    type="submit"
    class="w-full px-[5dvw] sm:px-8 py-1 bg-primary hover:bg-fadedPrimary text-white transition-colors ease-out rounded-[7px]"
  >
    {{ content }}
  </button>
</template>
