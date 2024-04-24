<script lang="ts" setup>
import UserCard from '@/components/feed/UserCard.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'
import NoContent from '@/components/shared/NoContent.vue'
import Loading from '@/components/shared/LoadingSpinner.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import { echo } from '@/config/echo'
import type { MatchedEventData } from '@/types/WebSocket'
import MatchedPopup from '@/components/feed/MatchedPopup.vue'

const { users, isLoading } = storeToRefs(useMeetingPersonStore())
const { user } = useUserStore()
const matchedUser = ref<MatchedEventData['likerDetails']>()

onMounted(() => {
  echo.private(`match.${user?.id}`).listen('.matched', (data: MatchedEventData) => {
    if (data) {
      matchedUser.value = data.likerDetails
      console.log(data)
    }
  })
})

onUnmounted(() => {
  echo.leave(`match.${user?.id}`)
})
</script>
<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <UserCard v-for="user in users" :key="user.id" :userData="user" />
    <NoContent v-if="users && users?.length < 2" />
    <MatchedPopup
      v-if="matchedUser?.id"
      :liker="matchedUser"
      @handleClose="() => (matchedUser = undefined)"
    />
  </div>
</template>
