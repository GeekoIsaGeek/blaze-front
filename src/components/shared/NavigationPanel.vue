<script lang="ts" setup>
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import TheProfileIcon from '@/components/icons/TheProfileIcon.vue'
import TheChatIcon from '@/components/icons/TheChatIcon.vue'
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import type { Route } from '@/types/Unions'

const activePage = computed(() => useRoute().path)
const getClasses = (route: Route) => [
  'navigationButton hover:navigationButtonH  hover:fill-active',
  `${activePage.value === route ? 'fill-active' : 'fill-gray-500'}`
]
</script>

<template>
  <div class="rounded-b-xl px-[3%] py-7 flex justify-around items-center">
    <RouterLink :to="{ name: 'feed' }">
      <TheFireIcon :class="getClasses('/feed')" />
    </RouterLink>
    <button>
      <TheChatIcon :class="getClasses('/chat')" />
    </button>
    <RouterLink :to="{ name: 'profile' }">
      <TheProfileIcon :class="getClasses('/profile')" />
    </RouterLink>
  </div>
</template>
