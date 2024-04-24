<script lang="ts" setup>
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import { useUserStore } from '@/stores/UserStore'
import type { MatchedEventData } from '@/types/WebSocket'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'

defineProps<{
  liker: MatchedEventData['likerDetails']
}>()

defineEmits<{
  handleClose: []
}>()

const { user } = useUserStore()
</script>

<template>
  <TransitionWrapper appear idleClass="!h-0">
    <div
      class="flex items-center justify-center flex-col gap-4 absolute desktop:rounded-2xl p-10 top-0 bg-black/80 backdrop-blur-sm text-pink-100 h-full w-full font-semibold desktop:border-[5px] border-fadedPrimary"
    >
      <h1 class="text-4xl desktop:text-5xl text-center">Fresh Match!</h1>
      <p class="text-xl desktop:text-2xl max-w-[80%] text-center">
        You just matched with {{ liker.username }}
      </p>

      <div class="my-14 flex gap-2 items-center justify-center w-full">
        <img
          :src="user?.photos[0].url"
          class="rounded-full w-[6rem] h-[6rem] desktop:w-[8rem] desktop:h-[8rem] shadow-lg object-cover"
        />

        <TheFireIcon
          class="fill-rose-200 animate-pulse absolute w-8 h-8 desktop:w-12 desktop:h-12"
        />
        <img
          :src="liker?.photo?.url"
          class="rounded-full w-[6rem] h-[6rem] desktop:w-[8rem] desktop:h-[8rem] shadow-lg object-cover"
        />
      </div>
      <button
        class="py-2 font-semibold text-lg w-[90%] flex rounded-full justify-center bg-gradient-to-r from-hotpink via-pinkishRed to-orange border-2 border-transparent text-white shadow transitions hover:border-white"
      >
        Send Message
      </button>
      <button
        class="py-2 font-semibold text-lg w-[90%] flex rounded-full justify-center border-2 border-hotpink transitions hover:bg-pinkishRed text-white shadow"
        @click="$emit('handleClose')"
      >
        Keep Swiping
      </button>
    </div>
  </TransitionWrapper>
</template>
