<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Interest, User } from '@/types/Pinia'
import { useUserStore } from '@/stores/UserStore'
import { fetchInterests } from '@/services/Interests'

const props = defineProps<{
  updateCurrentInterests: (interest: Interest) => void
}>()

const interests = ref<User['interests']>([])
const searchString = ref('')
const filteredInterests = ref<typeof interests.value>([])
const userInterests = computed(() => useUserStore().user?.interests)
const { addInterest } = useUserStore()

onMounted(async () => {
  const fetchedInterests = await fetchInterests()
  interests.value = fetchedInterests || []
  filteredInterests.value = fetchedInterests || []
})

const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  searchString.value = input.value

  filteredInterests.value = interests.value.filter((obj) =>
    obj.interest.toLowerCase().startsWith(input.value.toLowerCase())
  )
}

const handleSelect = async (selectedInterest: Interest) => {
  if (
    userInterests?.value?.find((interest) => interest.id === selectedInterest.id) ||
    userInterests?.value!.length >= 5
  )
    return

  await addInterest(selectedInterest)
  props.updateCurrentInterests(selectedInterest)
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

  <ul class="flex items-center gap-1 flex-wrap" v-if="filteredInterests.length">
    <li
      v-for="obj in filteredInterests"
      :key="obj.id"
      :class="[
        'px-4 border shadow rounded-lg flex items-center gap-1 hover:bg-primary hover:text-white transitions hover:border-transparent cursor-pointer',
        userInterests?.find((interest) => interest.id === obj.id)
          ? 'border-fadedPrimary'
          : 'border-slate-300'
      ]"
      @click="() => handleSelect(obj)"
    >
      {{ obj.interest }}
    </li>
  </ul>
</template>
