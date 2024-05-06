<script lang="ts" setup>
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import MainContentWrapper from '@/components/shared/MainContentWrapper.vue'
import NewMatches from '@/components/chats/NewMatches.vue'
import PreviousChats from '@/components/chats/PreviousChats.vue'
</script>
<template>
  <div class="bg-white w-full py-5 px-3 rounded-t-3xl flex justify-center items-center">
    <TheFireIcon class="w-8 h-8 fill-primary" />
    <span class="text-xl font-medium text-textPrimary">Blaze</span>
  </div>
  <MainContentWrapper class="py-4 bg-white">
    <div>
      <NewMatches />
      <PreviousChats />
    </div>
  </MainContentWrapper>
  <NavigationPanel />
</template>
