<script setup lang="ts">
import ServerError from '@/components/shared/ServerError.vue'
import logo from '/public/favicon.svg'

defineProps<{
  submitHandler: (e?: Event | undefined) => Promise<Promise<void> | undefined>
  serverError: string
}>()
</script>

<template>
  <div class="flex items-center justify-center px-20 py-32 h-full w-full">
    <form @submit="submitHandler" class="w-3/4 flex flex-col items-center justify-center gap-3">
      <img :src="logo" class="w-[50px] mb-10" />
      <ServerError v-if="serverError">{{ serverError }}</ServerError>
      <slot />
    </form>
  </div>
</template>
