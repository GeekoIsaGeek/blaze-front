<script setup lang="ts">
const emit = defineEmits<{
  closeModal: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="absolute top-0 left-0 bg-black/60 flex justify-center items-center w-full h-full z-50"
      @click="emit('closeModal')"
    >
      <slot />
    </div>
  </Teleport>
</template>
