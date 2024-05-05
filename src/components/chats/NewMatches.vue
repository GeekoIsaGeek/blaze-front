<script setup lang="ts">
import { onMounted } from 'vue'
import { useMatchesStore } from '@/stores/MatchesStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import NoContent from '@/components/shared/NoContent.vue'

const { getMatches } = useMatchesStore()
const { matches } = storeToRefs(useMatchesStore())

onMounted(async () => getMatches())
</script>

<template>
  <div class="overflow-x-hidden flex gap-2 flex-col">
    <h2 class="text-gray-700 font-bold">New Matches</h2>
    <ul v-if="matches?.length" class="flex gap-3 select-none overflow-x-auto snap-x">
      <li
        v-for="match in matches"
        :key="match?.id"
        class="flex flex-col items-center gap-1.5 snap-start outline-none focus:saturate-150 hover:saturate-150 cursor-pointer transitions"
        tabindex="0"
      >
        <RouterLink
          :to="{ name: 'matchedUserProfile', params: { id: match?.id } }"
          class="flex flex-col gap-1"
        >
          <img
            :src="match?.photos[0]?.url"
            alt="profile photo"
            class="rounded-lg w-24 min-w-24 h-28"
          />
          <span class="font-medium text-center leading-5 line-clamp-2 max-w-24">
            {{ match?.username }}
          </span>
        </RouterLink>
      </li>
    </ul>
    <NoContent content="You got 0 new matches!" v-else />
  </div>
</template>
