<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import { Field } from 'vee-validate'
const user = useUserStore().user
</script>
<template>
  <div>
    <FieldLabel> Living In </FieldLabel>
    <div class="w-full bg-white flex items-center py-4">
      <p class="px-4 line-clamp-1 max-w-[50%]" v-if="user?.location">{{ user.location }}</p>
      <Field
        name="location"
        placeholder="Where do you live?"
        class="h-full outline-none pl-4"
        :class="[user?.location && 'border-l border-l-gray-400 ']"
      />
    </div>
  </div>
</template>
