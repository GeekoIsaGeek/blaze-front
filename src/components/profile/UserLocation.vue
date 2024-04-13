<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import { Field } from 'vee-validate'
import { capitalize, computed } from 'vue'

const location = computed(() => useUserStore().user?.location)
</script>
<template>
  <div>
    <FieldLabel> Living In </FieldLabel>
    <div class="w-full bg-white flex items-center shadow-sm">
      <p class="px-4 line-clamp-1 max-w-[50%] py-4" v-if="location">
        {{ capitalize(location) }}
      </p>
      <Field
        name="location"
        type="text"
        placeholder="Where do you live?"
        class="h-full outline-none pl-4"
        :class="[location && 'border-l border-l-gray-400 ']"
        autocomplete="off"
      />
    </div>
  </div>
</template>
