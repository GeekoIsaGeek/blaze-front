<script setup lang="ts">
import { retrieveMessages } from '@/services/Chat'
import { useChatStore } from '@/stores/ChatStore'
import { useUserStore } from '@/stores/UserStore'
import type { Message } from '@/types/Chats'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPhotoUrl } from '@/helpers/string'

const { id } = useRoute().params
const { user } = useUserStore()
const { getProfilePic, chats, getChats } = useChatStore()
const inputValue = ref()

const profilePicUrl = computed(() => getPhotoUrl(getProfilePic(Number(id?.toString()))))

const messages = ref<Message[]>()

onMounted(async () => {
  const retrievedMessages = await retrieveMessages(id?.toString())
  messages.value = retrievedMessages

  if (!chats) {
    await getChats()
  }
})

const handleSubmit = (e: SubmitEvent) => {
  inputValue.value = ''
}
</script>

<template>
  <ul
    class="w-full flex gap-x-4 gap-y-1.5 flex-col h-full max-h-[calc(100%-40px)] overflow-scroll outline-none"
    tabIndex="0"
    autofocus
  >
    <li
      v-for="message in messages"
      :key="message?.id"
      class="flex items-end gap-1 max-w-[70%]"
      :class="[message?.sender_id === user?.id && 'self-end flex-row-reverse']"
    >
      <RouterLink
        :to="{ name: 'matchedUserProfile', params: { id: message?.sender_id } }"
        v-if="message?.sender_id !== user?.id"
      >
        <img :src="profilePicUrl" alt="profile photo" class="rounded-full w-10 h-10 object-cover" />
      </RouterLink>
      <p
        class="leading-5 px-3 py-2 rounded-xl"
        :class="[message?.receiver_id === user?.id ? 'bg-pinkishRed text-white' : 'bg-gray-200']"
      >
        {{ message?.message }}
      </p>
    </li>
  </ul>
  <form
    class="h-10 w-full border-rounded border border-gray-400 bg-gray-200 rounded-full px-4 flex justify-between items-center shadow"
    @submit.prevent="handleSubmit"
  >
    <input
      type="text"
      placeholder="Type your message"
      class="w-full bg-transparent outline-none pr-4"
      v-model="inputValue"
    />
    <button type="submit" class="text-textPrimary">Send</button>
  </form>
</template>
``
