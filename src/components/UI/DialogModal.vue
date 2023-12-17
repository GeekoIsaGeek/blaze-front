<script setup lang="ts">
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import SubmitButton from './SubmitButton.vue'

const emit = defineEmits<{
  closeModal: []
}>()

defineProps<{
  dialogQuestion: string
}>()
</script>

<template>
  <ModalWrapper @closeModal="emit('closeModal')">
    <div class="bg-white rounded-lg p-10 shadow" @click.stop>
      <p class="max-w-[300px] text-lg">{{ dialogQuestion }}</p>
      <div class="flex justify-between w-full mt-10">
        <SubmitButton content="Yes" class="w-max" />
        <button class="hover:text-black/60" @click="emit('closeModal')">Not Sure</button>
      </div>
    </div>
  </ModalWrapper>
</template>
