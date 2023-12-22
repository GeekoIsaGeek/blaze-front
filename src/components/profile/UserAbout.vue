<script setup lang="ts">
import { Field } from 'vee-validate'
import FieldLabel from '@/components/shared/FieldLabel.vue'
</script>

<template>
  <div>
    <FieldLabel>About Me</FieldLabel>
    <Field
      name="about"
      as="textarea"
      class="resize-none h-20 formField focus:shadow"
      placeholder="Tell people about you"
    />
  </div>
</template>
