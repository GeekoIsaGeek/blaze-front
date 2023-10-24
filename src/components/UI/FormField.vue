<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
defineProps<{
  name: string
  type: string
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <Field
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="bg-offWhite shadow-sm border border-gray-400 text-gray-500 rounded-md px-2 py-1 shadow-input outline-gray-400 w-full"
    />
    <ErrorMessage :name="name" class="text-primary text-base break-words max-w-[360px]" />
  </div>
</template>
