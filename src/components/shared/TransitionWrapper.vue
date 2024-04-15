<script setup lang="ts">
defineProps<{
  activeClass?: string
  idleClass?: string
}>()
</script>

<template>
  <Transition
    :enterFromClass="`opacity-0 generalTransition ${idleClass}`"
    :enterToClass="`opacity-1 generalTransition ${activeClass}`"
    :leaveToClass="`opacity-0 generalTransition ${idleClass}`"
  >
    <slot
  /></Transition>
</template>
