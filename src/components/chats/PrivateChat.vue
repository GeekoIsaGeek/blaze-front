<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const { id } = useRoute().params
const { user } = useUserStore()
const inputValue = ref()

const messages = [
  { id: 1, senderId: 5, receiverId: user?.id, message: 'Lorem ipsum dor sit ameutus triudum' },
  {
    id: 2,
    senderId: user?.id,
    receiverId: 5,
    message: 'A message that was sent by ' + user?.username
  }
]

const handleSubmit = (e: SubmitEvent) => {
  inputValue.value = ''
}
</script>

<template>
  <ul
    class="w-full flex gap-4 flex-col h-full max-h-[calc(100%-40px)] overflow-scroll outline-none"
    tabIndex="0"
    autofocus
  >
    <li
      v-for="message in messages"
      :key="message?.id"
      class="flex items-end gap-1 max-w-[70%]"
      :class="[message?.receiverId === user?.id && 'self-end flex-row-reverse']"
    >
      <img
        src="https://i.pinimg.com/236x/f4/49/9d/f4499d983e86461960f279712917424e.jpg"
        alt="profile photo"
        class="rounded-full w-10 h-10 object-cover"
        v-if="message?.receiverId !== user?.id"
      />
      <p
        class="leading-5 px-3 py-2 rounded-xl"
        :class="[message?.receiverId === user?.id ? 'bg-pinkishRed text-white' : 'bg-gray-200']"
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
    <button type="submit">Send</button>
  </form>
</template>
