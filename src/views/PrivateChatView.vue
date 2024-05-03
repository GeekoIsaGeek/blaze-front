<script setup lang="ts">
import DetailsPageTopPanel from '@/components/shared/DetailsPageTopPanel.vue'
import MainContentWrapper from '@/components/shared/MainContentWrapper.vue'
import PrivateChat from '@/components/chats/PrivateChat.vue'
</script>

<template>
  <DetailsPageTopPanel />
  <MainContentWrapper class="p-4 bg-neutral-100 !max-h-full">
    <PrivateChat />
  </MainContentWrapper>
</template>
