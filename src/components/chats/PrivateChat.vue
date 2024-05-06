<script setup lang="ts">
import { retrieveMessages, sendMessage } from '@/services/Chat'
import { useChatStore } from '@/stores/ChatStore'
import { useUserStore } from '@/stores/UserStore'
import type { Message } from '@/types/Chats'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPhotoUrl } from '@/helpers/string'
import { echo } from '@/config/echo'
import type { MessageProcessedEventData } from '@/types/WebSocket'

const {
  params: { id: chatId },
  query: { participant }
} = useRoute()

const { user } = useUserStore()
const { getProfilePic, chats, getChats } = useChatStore()
const inputValue = ref()

const profilePicUrl = computed(() => getPhotoUrl(getProfilePic(Number(chatId?.toString()))))

const messages = ref<Message[]>()
const messageListRef = ref<HTMLUListElement | null>(null)

const scrollToBottom = () => {
  if (messageListRef.value) {
    setTimeout(() => {
      messageListRef.value?.scrollTo({
        top: messageListRef.value?.scrollHeight,
        behavior: 'smooth'
      })
    }, 0)
  }
}

watch(messages, scrollToBottom)

onMounted(async () => {
  echo
    .private(`chat.${chatId}`)
    .listen('.messageProcessed', ({ message }: MessageProcessedEventData) => {
      if (message) {
        messages.value = [...(messages.value || []), message]
      }
    })

  const retrievedMessages = await retrieveMessages(chatId?.toString())
  messages.value = retrievedMessages

  if (!chats) {
    await getChats()
  }
})

const handleSubmit = async () => {
  if (inputValue.value) {
    const status = await sendMessage(Number(participant?.toString()), inputValue.value)
    if (status === 201) {
      inputValue.value = ''
    }
  }
}
</script>

<template>
  <ul
    class="w-full flex gap-x-4 gap-y-1.5 flex-col h-full overflow-y-auto outline-none scroll-smooth"
    tabIndex="0"
    autofocus
    ref="messageListRef"
  >
    <li
      v-for="message in messages"
      :key="message?.id"
      class="flex items-end gap-1 w-full"
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
