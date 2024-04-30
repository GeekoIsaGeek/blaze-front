<script setup lang="ts">
import { capitalize } from 'vue'
</script>
<template>
  <div class="overflow-y-hidden flex gap-3 flex-col mt-4">
    <h2 class="text-gray-700 font-bold">Chats</h2>
    <ul class="flex items-center flex-col h-full select-none overflow-y-auto scroll-smooth">
      <li
        class="flex items-center flex-col h-full w-full hover:bg-gray-100 transitions rounded-md cursor-pointer"
        v-for="el in [0, 1, 2, 3, 4, 5, 6]"
        :key="el"
      >
        <div class="flex items-center gap-3 h-full w-full py-4">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            class="rounded-full w-20 h-20 shadow"
          />
          <div class="flex flex-col w-full h-full">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium">{{ capitalize('shota') }}</h3>
              <span class="font-medium text-white bg-black text-sm px-3 py-1 rounded-full"
                >Your Turn</span
              >
            </div>
            <p>Agi raia simon?</p>
          </div>
        </div>
        <hr class="w-[calc(100%-5.75rem)] self-end" />
      </li>
    </ul>
  </div>
</template>
