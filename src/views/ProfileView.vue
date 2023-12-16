<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import TopPanel from '@/components/profile/TopPanel.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import TheLogoutButton from '@/components/UI/TheLogoutButton.vue'

const user = useUserStore().user
</script>
<template>
  <div class="w-full h-full bg-slate-200 rounded-2xl flex flex-col items-center overflow-x-hidden">
    <TopPanel />
  </div>
  <NavigationPanel />
</template>
