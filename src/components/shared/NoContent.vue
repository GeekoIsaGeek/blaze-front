<script lang="ts" setup>
import TearyEyes from '@/components/icons/TheTearyEyesIcon.vue'

defineProps<{
  showOnFeed?: boolean
  content?: string
}>()
</script>

<template>
  <div class="flex h-full w-full justify-center items-center flex-col">
    <TearyEyes :class="[showOnFeed ? 'w-24 h-24' : 'w-16 h-16']" />
    <p class="text-xl text-gray-700" :class="[showOnFeed ? 'my-10 !text-2xl' : 'my-4']">
      {{ content || 'No more options available!' }}
    </p>
    <RouterLink
      :to="{ name: 'profile', query: { show_settings: 'true' } }"
      class="px-4 py-2 bg-fadedPrimary/90 text-white rounded-xl hover:bg-hotpink transitions"
      v-if="showOnFeed"
    >
      Update Preferences
    </RouterLink>
  </div>
</template>
