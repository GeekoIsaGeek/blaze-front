<script setup lang="ts">
import UserCardButtons from '@/components/feed/UserCardButtons.vue'
import UserCardIndicators from '@/components/feed/UserCardIndicators.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'

const { showNextPhoto, showPreviousPhoto } = useMeetingPersonStore()
const { currentPhoto } = storeToRefs(useMeetingPersonStore())
</script>

<template>
  <div class="w-full h-[86%] desktop:h-[82%] rounded-3xl relative">
    <div
      class="bg-gradient-to-t from-black/80 desktop:from-black/60 from-20% to-60% to-transparent w-full h-full absolute top-0 left-0"
    ></div>

    <img :src="currentPhoto" class="h-full w-full rounded-t-xl object-cover" />
    <UserCardIndicators />

    <div class="w-full h-full top-0 absolute left-0 flex rounded-lg">
      <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
      <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
    </div>

    <div class="px-[3%] absolute bottom-0 py-4 z-10">
      <h1 class="text-3xl font-bold text-white">
        Lisa <span class="text-[22px] font-bold">23</span>
      </h1>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae.
      </p>
      <UserCardButtons />
    </div>
  </div>
</template>
