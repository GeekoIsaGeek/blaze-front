<script setup lang="ts">
import { onMounted } from 'vue'
import { useMatchesStore } from '@/stores/MatchesStore'
import { storeToRefs } from 'pinia'

const { getMatches } = useMatchesStore()
const { matches } = storeToRefs(useMatchesStore())

onMounted(async () => getMatches())
</script>

<template>
  <div class="overflow-x-hidden flex gap-3 flex-col">
    <h2 class="text-gray-700 font-bold">New Matches</h2>
    <ul v-if="matches?.length" class="flex gap-3 select-none overflow-x-auto snap-x">
      <li
        v-for="match in matches"
        :key="match?.id"
        class="flex flex-col items-center gap-2 snap-start"
        tabindex="0"
      >
        <img
          :src="match?.photos[0]?.url"
          alt="profile photo"
          class="rounded-[7px] w-24 min-w-24 h-28"
        />
        <span class="font-medium text-center leading-5 px-1 line-clamp-2 max-w-24">
          {{ match?.username }}
        </span>
      </li>
    </ul>
  </div>
</template>
