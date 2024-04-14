<script setup lang="ts">
import ArrowIcon from '@/components/icons/TheArrowRightIcon.vue'
import { ref } from 'vue'
import SettingsDropDown from '@/components/profile/SettingsDropDown.vue'
import { SHOW_OPTIONS } from '@/config/constants'
import type { Preference } from '@/types/Pinia'
import AgeRangeSlider from '@/components/profile/AgeRangeSlider.vue'

const showDropdown = ref(false)

const props = defineProps<{
  preferences: Preference
}>()

const emit = defineEmits<{
  'update:preferences': [Preference]
}>()

const handleSelect = (selected: string) =>
  emit('update:preferences', {
    ...props.preferences,
    show: selected as (typeof SHOW_OPTIONS)[number]
  })

const handleAgeRangeChange = (from: number, to: number) =>
  emit('update:preferences', {
    ...props.preferences,
    age_from: from,
    age_to: to
  })
</script>
<template>
  <Transition
    enterFromClass="opacity-0 bottomSheetTransition"
    enterToClass="opacity-1 bottomSheetTransition"
    appear
  >
    <div class="bg-white min-h-full py-4">
      <h2 class="pl-4 font-medium text-lg pb-2 text-center">Preferences</h2>
      <div
        class="border-y border-slate-300 p-4 pr-2 cursor-pointer hover:bg-gray-100 transitions select-none"
        @click="showDropdown = !showDropdown"
      >
        <div class="flex justify-between w-full">
          <span class="text-lg">Show</span>
          <ArrowIcon
            class="fill-gray-500 w-8 h-8 min-w-8 group-hover:translate-x-1 transitions"
            :class="[showDropdown ? '-rotate-90' : 'rotate-90']"
          />
        </div>
        <SettingsDropDown
          :options="SHOW_OPTIONS"
          :showDropdown="showDropdown"
          :selected="preferences.show || ''"
          @handleSelect="handleSelect"
        />
      </div>
      <RangeSlider @handleAgeRangeChange="handleAgeRangeChange" />
    </div>
  </Transition>
</template>
