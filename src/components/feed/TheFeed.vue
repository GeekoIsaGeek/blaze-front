<script lang="ts" setup>
import UserCard from '@/components/feed/UserCard.vue'
import { useMeetingPersonStore } from '@/stores/MeetingPersonStore'
import { storeToRefs } from 'pinia'
import NoContent from '@/components/shared/NoContent.vue'
import Loading from '@/components/shared/LoadingSpinner.vue'

const { users, isLoading } = storeToRefs(useMeetingPersonStore())
</script>
<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <UserCard v-for="user in users" :key="user.id" :userData="user" />
    <NoContent v-if="users?.length < 2" />
  </div>
</template>
