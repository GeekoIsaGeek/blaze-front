<script setup lang="ts">
import UserCardButtons from '@/components/home/UserCardButtons.vue'
import UserCardIndicators from '@/components/home/UserCardIndicators.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'

const { showNextPhoto, showPreviousPhoto } = useMeetingPersonStore()
const { currentPhoto } = storeToRefs(useMeetingPersonStore())
</script>

<template>
  <div class="w-[400px] h-[600px] rounded-xl relative">
    <img :src="currentPhoto" class="h-full w-full rounded-t-xl object-cover" />
    <UserCardIndicators />
    <div class="px-[3%] absolute bottom-0 py-4 bg-[rgba(0,0,0,0.2)] z-10">
      <h1 class="text-3xl font-bold text-white">
        Lisa <span class="text-[22px] font-bold">23</span>
      </h1>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae.
      </p>
      <UserCardButtons />
    </div>
    <div class="w-full h-full top-0 absolute left-0 flex rounded-lg">
      <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
      <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
    </div>
  </div>
</template>
