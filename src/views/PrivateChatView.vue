<script setup lang="ts">
import DetailsPageTopPanel from '@/components/shared/DetailsPageTopPanel.vue'
import MainContentWrapper from '@/components/shared/MainContentWrapper.vue'
import PrivateChat from '@/components/chats/PrivateChat.vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPhotoUrl } from '@/helpers/string'
import { onMounted, ref } from 'vue'
import { getProfilePic } from '@/services/User'

const { query } = useRoute()
const profilePic = ref()

onMounted(async () => {
  profilePic.value = await getProfilePic(query?.participant?.toString())
})
</script>

<template>
  <DetailsPageTopPanel>
    <RouterLink
      :to="{ name: 'matchedUserProfile', params: { id: query?.participant?.toString() } }"
    >
      <img
        :src="getPhotoUrl(profilePic)"
        alt="profile photo"
        class="rounded-full !w-10 !h-10 shadow-pfp"
      />
    </RouterLink>
  </DetailsPageTopPanel>
  <MainContentWrapper class="p-4 bg-neutral-100 !max-h-full object-cover">
    <PrivateChat />
  </MainContentWrapper>
</template>
