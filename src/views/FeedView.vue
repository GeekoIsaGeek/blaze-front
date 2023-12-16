<script setup lang="ts">
import UserCard from '@/components/feed/UserCard.vue'
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
</script>

<template>
  <div class="pb-3 pt-2 w-full flex items-end text-lg px-[3%] text-primary font-semibold">
    <TheFireIcon class="fill-primary w-8 h-8" />
    Blaze
  </div>
  <UserCard />
  <NavigationPanel />
</template>
