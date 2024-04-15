<script setup lang="ts">
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import LocationIcon from '@/components/icons/TheLocationIcon.vue'
import LanguageIcon from '@/components/icons/TheLanguageIcon.vue'

defineProps<{
  showDetails: boolean
}>()
</script>
<template>
  <TransitionWrapper activeClass="!delay-[0.15s]">
    <div v-show="showDetails" class="pb-10 snap-start min-h-max py-4 text-textPrimary">
      <div class="detailsSectionWrapper">
        <h1 class="text-4xl font-medium text-black flex justify-between items-center">
          <p>George <span class="text-3xl font-bold">23</span></p>
        </h1>
        <div class="mt-3 flex gap-1 items-center">
          <LocationIcon class="w-5 h-5" /> <span class="text-md">Tbilisi</span>
        </div>
      </div>

      <p class="detailsSectionWrapper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur vitae beatae optio
        officiis fugit soluta distinctio, id nihil harum vero velit possimus? Pariatur ducimus
        perferendis atque culpa eius! Totam, repellendus?
      </p>

      <div class="detailsSectionWrapper">
        <h2 class="font-bold text-xl text-black mb-4">Languages I know</h2>
        <ul class="flex items-center gap-2 flex-wrap">
          <li
            v-for="interest in ['English', 'Georgian']"
            :key="interest"
            class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm flex gap-2 items-center"
          >
            <LanguageIcon class="w-4 h-4" />
            {{ interest }}
          </li>
        </ul>
      </div>

      <div class="detailsSectionWrapper">
        <h2 class="font-bold text-xl text-black mb-4">Passions</h2>
        <ul class="flex items-center gap-2 flex-wrap">
          <li
            v-for="interest in ['Coding', 'Punk Rock', 'Alternative', 'Sci-fi', 'Anime']"
            :key="interest"
            class="border-2 border-gray-400 px-4 py-1 rounded-full shadow-sm"
          >
            {{ interest }}
          </li>
        </ul>
      </div>
    </div>
  </TransitionWrapper>
</template>
