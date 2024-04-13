<script setup lang="ts">
import TheSettingsIcon from '@/components/icons/TheSettingsIcon.vue'

defineEmits<{
  updateProfile: []
  'update:showSettings': [boolean]
  updatePreferences: []
}>()

defineProps<{
  showSettings: boolean
}>()
</script>

<template>
  <div class="bg-white w-full py-5 px-3 rounded-t-3xl flex justify-between items-center">
    <p class="text-lg font-semibold text-slate-600">
      Edit {{ showSettings ? 'Settings' : 'Profile' }}
    </p>
    <div class="flex items-center gap-5">
      <button
        class="text-fadedPrimary border border-fadedPrimary text-md font-medium hover:bg-fadedPrimary hover:text-white rounded-md px-2 tranitions"
        @click="() => (showSettings ? $emit('updatePreferences') : $emit('updateProfile'))"
      >
        Done
      </button>

      <TheSettingsIcon
        class="fill-slate-500 hover:fill-fadedPrimary hover:rotate-[30deg] cursor-pointer transitions w-7 h-7"
        :class="[showSettings && '!fill-fadedPrimary']"
        @click="$emit('update:showSettings', !showSettings)"
      />
    </div>
  </div>
</template>
