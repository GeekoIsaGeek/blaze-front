<script setup lang="ts">
import NavigationPanel from '@/components/shared/NavigationPanel.vue'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import { onMounted } from 'vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import Feed from '@/components/feed/TheFeed.vue'
import { useUserStore } from '@/stores/UserStore'
import { echo } from '@/config/echo'
import type { MatchedEventData } from '@/types/WebSocket'

const { getMeetingUsers, updateMatchedUser } = useMeetingPersonStore()
const { user } = useUserStore()

onMounted(async () => {
  await getMeetingUsers()

  echo.private(`match.${user?.id}`).listen('.matched', (data: MatchedEventData) => {
    if (data) {
      updateMatchedUser(data?.likerDetails)
    }
  })
})
</script>

<template>
  <div
    class="pb-3 pt-2 w-full flex items-end text-lg px-[3%] text-textPrimary font-medium select-none"
  >
    <TheFireIcon class="fill-primary w-8 h-8" />
    Blaze
  </div>
  <Feed />
  <NavigationPanel />
</template>
