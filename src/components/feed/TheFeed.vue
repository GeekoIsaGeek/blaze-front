<script lang="ts" setup>
import UserCard from '@/components/feed/UserCard.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'
import NoContent from '@/components/shared/NoContent.vue'
import Loading from '@/components/shared/LoadingSpinner.vue'
import { onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import { echo } from '@/config/echo'

const { users, isLoading } = storeToRefs(useMeetingPersonStore())
const { user } = useUserStore()

onMounted(() => {
  console.log(echo)
  echo.channel(`match.${user?.id}`).listen('.matched', (e) => console.log(e))
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
  </div>
</template>
