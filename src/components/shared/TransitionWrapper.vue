<script setup lang="ts">
defineProps<{
  activeClass?: string
  idleClass?: string
  appear?: boolean
}>()
</script>

<template>
  <Transition
    :enterFromClass="`opacity-0 generalTransition ${idleClass}`"
    :enterToClass="`opacity-1 generalTransition ${activeClass}`"
    :leaveToClass="`opacity-0 generalTransition ${idleClass}`"
    class="snap-start"
    :appear="appear"
  >
    <slot
  /></Transition>
</template>
