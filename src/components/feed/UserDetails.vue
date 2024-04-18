<script setup lang="ts">
import LocationIcon from '@/components/icons/TheLocationIcon.vue'
import LanguageIcon from '@/components/icons/TheLanguageIcon.vue'
import { LANGUAGES } from '@/assets/languages'
import type { Person } from '@/types/MeetingPerson'

defineProps<{
  showDetails: boolean
  data: Person
}>()
</script>
<template>
  <div v-if="showDetails" class="pb-10 min-h-max py-4 text-textPrimaryb bg-white">
    <div class="detailsSectionWrapper">
      <h1 class="text-4xl font-medium text-black flex gap-2 items-center">
        {{ data?.username }} <span class="text-3xl font-bold">{{ data?.age }}</span>
      </h1>
      <div class="mt-3 flex gap-1 items-center" v-if="data?.location">
        <LocationIcon class="w-5 h-5" /> <span class="text-md">{{ data?.location }}</span>
      </div>
    </div>

    <p class="detailsSectionWrapper min-h-24" v-if="data?.bio">
      {{ data?.bio }}
    </p>

    <div class="detailsSectionWrapper" v-if="data?.languages?.length">
      <h2 class="font-bold text-xl text-black mb-4">Languages I know</h2>
      <ul class="flex items-center gap-2 flex-wrap">
        <li
          v-for="languageCode in data?.languages"
          :key="languageCode"
          class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm flex gap-2 items-center"
        >
          <LanguageIcon class="w-4 h-4" />
          {{ LANGUAGES[languageCode] }}
        </li>
      </ul>
    </div>

    <div class="detailsSectionWrapper" v-if="data?.interests?.length">
      <h2 class="font-bold text-xl text-black mb-4">Passions</h2>
      <ul class="flex items-center gap-2 flex-wrap">
        <li
          v-for="interest in data?.interests"
          :key="interest.interest"
          class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm"
        >
          {{ interest.interest }}
        </li>
      </ul>
    </div>
  </div>
</template>
