<script setup lang="ts">
import UserCardButtons from '@/components/feed/UserCardButtons.vue'
import UserCardIndicators from '@/components/feed/UserCardIndicators.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'
import ArrowDownCircle from '@/components/icons/TheArrowDownCircleIcon.vue'
import { ref } from 'vue'
import UserDetails from '@/components/feed/UserDetails.vue'
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'

const { showNextPhoto, showPreviousPhoto } = useMeetingPersonStore()
const { currentPhoto } = storeToRefs(useMeetingPersonStore())
const showDetails = ref(false)
</script>

<template>
  <div
    class="w-full h-[86%] desktop:h-[82%] desktop:max-h-[82%] overflow-auto rounded-t-xl snap-y desktop:rounded-t-3xl relative scroll-smooth"
    :class="[showDetails && '']"
  >
    <div
      class="bg-gradient-to-t from-black/80 desktop:from-black/60 from-20% to-60% to-transparent w-full h-full absolute top-0 left-0"
    ></div>

    <img :src="currentPhoto" class="h-full w-full rounded-t-xl object-cover" />
    <UserCardIndicators />

    <div class="w-full h-full top-0 absolute left-0 flex rounded-lg">
      <div class="h-full w-[50%]" @click="showPreviousPhoto()"></div>
      <div class="h-full w-[50%]" @click="showNextPhoto()"></div>
    </div>

    <div class="px-[3%] absolute w-full bottom-0 py-4 z-10">
      <TransitionWrapper idleClass="!-translate-x-14">
        <div v-show="!showDetails">
          <h1 class="text-3xl font-bold text-white flex justify-between items-center">
            <p>Lisa <span class="text-[22px] font-bold">23</span></p>
          </h1>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae.
          </p>
        </div>
      </TransitionWrapper>

      <UserCardButtons />
      <ArrowDownCircle
        class="w-7 h-7"
        @click="showDetails = !showDetails"
        :class="[
          showDetails ? 'rotate-90' : '-rotate-90',
          'transitions hover:scale-110 cursor-pointer absolute right-6 bottom-6 shadow-lg rounded-full'
        ]"
      />
    </div>
    <UserDetails :showDetails="showDetails" />
  </div>
</template>
