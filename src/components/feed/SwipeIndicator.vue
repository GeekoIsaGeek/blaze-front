<script lang="ts" setup>
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'

defineProps<{
  cardStyles: { x: number; y: number; rotate: number }
}>()
</script>
<template>
  <TransitionWrapper>
    <p
      class="absolute top-[100px] right-[30%] text-5xl font-medium text-pinkishRed border-[5px] px-4 py-1 rounded-lg border-pinkishRed uppercase transitions"
      :class="[
        cardStyles.x < 0 ? 'text-pinkishRed border-pinkishRed' : 'text-trueGreen border-trueGreen'
      ]"
      v-show="cardStyles.x !== 0"
    >
      {{ cardStyles.x > 0 ? 'LIKE' : 'NOPE' }}
    </p>
  </TransitionWrapper>
</template>
