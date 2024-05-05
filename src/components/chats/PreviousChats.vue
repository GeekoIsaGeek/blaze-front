<script setup lang="ts">
import { retrieveChatPreviews } from '@/services/ChatsMatches'
import type { ChatPreview } from '@/types/Chats'
import { capitalize, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getPhotoUrl } from '@/helpers/string'

const chats = ref<ChatPreview[]>()

onMounted(async () => {
  const data = await retrieveChatPreviews()
  chats.value = data
})
</script>
<template>
  <div class="overflow-y-hidden flex gap-3 flex-col mt-4">
    <h2 class="text-gray-700 font-bold">Chats</h2>
    <ul class="flex items-center flex-col h-full select-none overflow-y-auto scroll-smooth">
      <li
        class="flex items-center flex-col h-full w-full hover:bg-gray-100 transitions rounded-md cursor-pointer"
        v-for="chat in chats"
        :key="chat?.user_id"
      >
        <RouterLink :to="{ name: 'chat', params: { id: chat?.user_id } }" class="w-full">
          <div class="flex items-center gap-3 h-full w-full py-2 desktop:py-4">
            <img
              :src="getPhotoUrl(chat?.photo)"
              class="rounded-full w-16 h-16 desktop:w-20 desktop:h-20 shadow"
            />
            <div class="flex flex-col w-full h-full">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">{{ capitalize(chat?.name) }}</h3>
                <span
                  class="font-medium text-white bg-black text-sm px-2.5 desktop:px-3 py-1 rounded-2xl desktop:rounded-full"
                  >Your Turn</span
                >
              </div>
              <p class="p-2 leading-5">
                {{ chat?.message }}
              </p>
            </div>
          </div>
          <hr class="w-[calc(100%-5.75rem)] self-end" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
