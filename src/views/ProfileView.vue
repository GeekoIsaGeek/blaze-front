<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import TopPanel from '@/components/profile/TopPanel.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import UserGallery from '@/components/profile/UserGallery.vue'

const user = useUserStore().user
</script>

<template>
  <TopPanel />
  <div class="w-full h-full text-gray-700 bg-slate-200 rounded-b-2xl flex flex-col px-3">
    <UserGallery />
  </div>
  <NavigationPanel />
</template>
