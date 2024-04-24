<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import MatchedPopup from '@/components/feed/MatchedPopup.vue'
import { storeToRefs } from 'pinia'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'

const { matchedUser } = storeToRefs(useMeetingPersonStore())
const { updateMatchedUser } = useMeetingPersonStore()
</script>

<template>
  <AppLayout>
    <MatchedPopup
      v-if="matchedUser?.id"
      :liker="matchedUser"
      @handleClose="() => updateMatchedUser(undefined)"
    />
    <RouterView />
  </AppLayout>
</template>
