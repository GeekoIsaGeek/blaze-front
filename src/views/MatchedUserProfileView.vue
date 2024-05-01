<script lang="ts" setup>
import MatchedUserProfile from '@/components/matched-user-profile/MatchedUserProfile.vue'
import { useRoute, useRouter } from 'vue-router'
import { retrieveMatchedUserData } from '@/services/MatchedUser'
import type { Person } from '@/types/MeetingPerson'
import { onMounted, ref } from 'vue'
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import DetailsPageTopPanel from '@/components/shared/DetailsPageTopPanel.vue'

const user = ref<Person>()
const { id: userId } = useRoute().params
const isLoading = ref(false)
const { push: navigate } = useRouter()

onMounted(async () => {
  isLoading.value = true
  const userData = await retrieveMatchedUserData(userId?.toString())
  isLoading.value = false

  if (!userData) {
    navigate({ name: 'chats' })
  } else {
    user.value = userData
  }
})
</script>

<template>
  <TransitionWrapper appear>
    <div>
      <DetailsPageTopPanel />
      <MatchedUserProfile :user="user" :isLoading="isLoading" />
    </div>
  </TransitionWrapper>
</template>
