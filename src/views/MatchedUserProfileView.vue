<script lang="ts" setup>
import MatchedUserProfile from '@/components/matched-user-profile/MatchedUserProfile.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { retrieveMatchedUserData } from '@/services/Matches'
import type { Person } from '@/types/MeetingPerson'
import { onMounted, ref } from 'vue'
import TransitionWrapper from '@/components/shared/TransitionWrapper.vue'
import DetailsPageTopPanel from '@/components/shared/DetailsPageTopPanel.vue'
import ChatIcon from '@/components/icons/TheChatIcon.vue'
import { getChatId } from '@/services/Chat'

const user = ref<Person>()
const { id: userId } = useRoute().params
const isLoading = ref(false)
const { push: navigate } = useRouter()

const chatId = ref()

onMounted(async () => {
  isLoading.value = true
  const userData = await retrieveMatchedUserData(userId?.toString())
  isLoading.value = false

  chatId.value = await getChatId(userData?.id)

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
      <DetailsPageTopPanel>
        <RouterLink
          :to="{
            name: 'chat',
            params: { id: chatId },
            query: { participant: user?.id }
          }"
        >
          <ChatIcon
            class="navigationButton hover:navigationButtonH hover:fill-active fill-gray-500"
          />
        </RouterLink>
      </DetailsPageTopPanel>
      <MatchedUserProfile :user="user" :isLoading="isLoading" />
    </div>
  </TransitionWrapper>
</template>
