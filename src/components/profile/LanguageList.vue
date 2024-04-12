<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import type { Language } from '@/types/Languages'
import { LANGUAGES } from '@/assets/languages'

const searchString = ref('')
const filteredLanguages = ref<[string, string][]>(Object.entries(LANGUAGES))
const userLanguages = computed(() => useUserStore().user?.languages)
const { addLanguage } = useUserStore()

const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  searchString.value = input.value
  filteredLanguages.value = Object.entries(LANGUAGES).filter((lang) => {
    return lang[1].toLowerCase().startsWith(input.value.toLowerCase())
  })
}

const handleSelect = async (selectedLanguage: [Language, string]) => {
  if (userLanguages?.value?.find((lang) => lang === selectedLanguage[0])) return

  addLanguage(selectedLanguage[0])
}
</script>

<template>
  <input
    type="text"
    class="w-full my-5 border shadow-sm rounded-lg pl-3 py-[2px] border-slate-400 outline-0"
    placeholder="Search..."
    :value="searchString"
    @input="handleInput"
  />

  <ul class="flex items-center gap-1 flex-wrap" v-if="Object.entries(filteredLanguages).length">
    <li
      v-for="language in filteredLanguages"
      :key="language[0]"
      :class="[
        'px-4 border shadow rounded-lg flex items-center gap-1 hover:bg-primary hover:text-white transitions hover:border-transparent cursor-pointer',
        userLanguages?.includes(language[0] as Language)
          ? 'border-fadedPrimary'
          : 'border-slate-300'
      ]"
      @click="() => handleSelect(language as [Language, string])"
    >
      {{ language[1] }}
    </li>
  </ul>
</template>
