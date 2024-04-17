<script setup lang="ts">
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import LocationIcon from '@/components/icons/TheLocationIcon.vue'
import LanguageIcon from '@/components/icons/TheLanguageIcon.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { LANGUAGES } from '@/assets/languages'
import { storeToRefs } from 'pinia'

defineProps<{
  showDetails: boolean
}>()

const { currentUser } = storeToRefs(useMeetingPersonStore())
</script>
<template>
  <TransitionWrapper activeClass="!delay-[0.15s]">
    <div v-if="showDetails" class="pb-10 min-h-max py-4 text-textPrimary">
      <div class="detailsSectionWrapper">
        <h1 class="text-4xl font-medium text-black flex gap-2 items-center">
          {{ currentUser?.username }} <span class="text-3xl font-bold">{{ currentUser?.age }}</span>
        </h1>
        <div class="mt-3 flex gap-1 items-center" v-if="currentUser?.location">
          <LocationIcon class="w-5 h-5" /> <span class="text-md">{{ currentUser?.location }}</span>
        </div>
      </div>

      <p class="detailsSectionWrapper min-h-24" v-if="currentUser?.bio">
        {{ currentUser?.bio }}
      </p>

      <div class="detailsSectionWrapper" v-if="currentUser?.languages?.length">
        <h2 class="font-bold text-xl text-black mb-4">Languages I know</h2>
        <ul class="flex items-center gap-2 flex-wrap">
          <li
            v-for="languageCode in currentUser?.languages"
            :key="languageCode"
            class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm flex gap-2 items-center"
          >
            <LanguageIcon class="w-4 h-4" />
            {{ LANGUAGES[languageCode] }}
          </li>
        </ul>
      </div>

      <div class="detailsSectionWrapper" v-if="currentUser?.interests?.length">
        <h2 class="font-bold text-xl text-black mb-4">Passions</h2>
        <ul class="flex items-center gap-2 flex-wrap">
          <li
            v-for="interest in currentUser?.interests"
            :key="interest.interest"
            class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm"
          >
            {{ interest.interest }}
          </li>
        </ul>
      </div>
    </div>
  </TransitionWrapper>
</template>
