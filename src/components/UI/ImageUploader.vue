<script lang="ts" setup>
import TheAddImageIcon from '@/components/icons/TheAddImageIcon.vue'
import DialogModal from './DialogModal.vue'
import { ref } from 'vue'

const emit = defineEmits<{
  setImage: [selected: string]
}>()

defineProps<{
  image: string | undefined
}>()

const selectedImage = ref()
const canShowModal = ref(false)

const handleChange = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement
  const selectedFile = (target.files as FileList)[0]

  if (selectedFile) {
    selectedImage.value = selectedFile
    canShowModal.value = true
  }
  target.value = ''
}
</script>

<template>
  <div
    class="w-full h-full overflow-hidden relative flex items-center rounded-lg justify-center border-[3px] border-dashed border-gray-400 hover:bg-slate-200 transitions"
  >
    <TheAddImageIcon class="fill-gray-400 w-7 h-7" />
    <input
      type="file"
      accept="image/jpeg, iamge/png, image/webp"
      class="scale-[600%] cursor-pointer opacity-0 absolute top-half left-0"
      @change="handleChange"
    />
    <DialogModal
      @closeModal="() => (canShowModal = false)"
      dialogQuestion="Do you really want to proceed uploading a photo?"
      v-if="canShowModal"
    />
  </div>
</template>
