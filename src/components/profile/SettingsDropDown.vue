<script lang="ts" setup>
import { capitalize } from 'vue'

defineProps<{
  showDropdown: boolean
  options: readonly string[]
  selected: string
}>()

defineEmits<{
  handleSelect: [select: string]
}>()
</script>

<template>
  <Transition
    enterFromClass="opacity-0 dropdownFoldDownTransition"
    enterToClass="opacity-1 dropdownFoldDownTransition"
    leaveFromClass="opacity-1 dropdownFoldUpTransition"
    leaveToClass="opacity-0 dropdownFoldUpTransition"
  >
    <ul v-if="showDropdown" class="flex items-center gap-2 justify-center mt-2">
      <li
        v-for="option in options"
        :key="option"
        class="border border-slate-300 shadow-sm px-5 rounded-md bg-white text-gray-700 hover:bg-fadedPrimary hover:border-transparent hover:text-white"
        :class="[option === selected && '!border-fadedPrimary']"
        @click="$emit('handleSelect', option)"
      >
        {{ capitalize(option) }}
      </li>
    </ul>
  </Transition>
</template>
