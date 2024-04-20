<script lang="ts" setup>
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'

defineProps<{
  interaction: 'like' | 'dislike' | null
}>()
</script>
<template>
  <TransitionWrapper>
    <p
      class="absolute top-[100px] right-[30%] text-5xl font-medium text-pinkishRed border-[5px] px-4 py-1 rounded-lg border-pinkishRed uppercase transitions"
      :class="[
        interaction === 'dislike'
          ? 'text-pinkishRed border-pinkishRed'
          : 'text-trueGreen border-trueGreen'
      ]"
      v-show="interaction"
    >
      {{ interaction === 'like' ? 'LIKE' : 'NOPE' }}
    </p>
  </TransitionWrapper>
</template>
