import { retrieveMatches } from '@/services/Matches'
import type { User } from '@/types/Pinia'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref<User[]>()

  const getMatches = async () => {
    matches.value = await retrieveMatches()
  }

  return { getMatches, matches }
})
