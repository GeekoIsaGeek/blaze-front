<script setup lang="ts">
import { Field } from 'vee-validate'
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import { computed } from 'vue'

const bio = computed(() => useUserStore().user?.bio)
</script>

<template>
  <div>
    <FieldLabel>About Me</FieldLabel>
    <Field
      name="about"
      :value="bio"
      as="textarea"
      class="resize-none h-20 !py-3 formField focus:shadow"
      placeholder="Tell people about you"
    />
  </div>
</template>
