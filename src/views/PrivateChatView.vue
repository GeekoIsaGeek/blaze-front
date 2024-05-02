<script setup lang="ts">
import { useRoute } from 'vue-router'
import DetailsPageTopPanel from '@/components/shared/DetailsPageTopPanel.vue'
import MainContentWrapper from '@/components/shared/MainContentWrapper.vue'

const { id } = useRoute().params
</script>
<template>
  <DetailsPageTopPanel />
  <MainContentWrapper class="p-4 bg-neutral-100">
    <h1>{{ id }}</h1>
  </MainContentWrapper>
</template>
