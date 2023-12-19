<script lang="ts" setup>
import TheAddImageIcon from '@/components/icons/TheAddImageIcon.vue'
import DialogModal from './DialogModal.vue'
import useUploadPhoto from '@/composables/useUploadPhoto'
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'
import { getPhotoUrl } from '@/helpers/string'

const emit = defineEmits<{
  setPhoto: [selected: string]
}>()

defineProps<{
  photo: string | undefined
}>()

const { uploadPhoto } = useUploadPhoto()
const { updatePhotos } = useUserStore()

const selectedImage = ref<File>()
const canShowModal = ref(false)

const handleUpload = async () => {
  const uploadedPhoto = await uploadPhoto(selectedImage.value!)
  if (uploadedPhoto?.url) {
    emit('setPhoto', getPhotoUrl(uploadedPhoto.url))
    updatePhotos(uploadedPhoto)
  }
  canShowModal.value = false
}

const handleChange = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement
  const selectedFile = (target.files as FileList)[0]

  if (selectedFile && selectedFile.size < 2 * 1024 * 1024) {
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
      @handler="handleUpload"
      dialogQuestion="Do you really want to proceed uploading the photo?"
      v-if="canShowModal"
    />
  </div>
</template>
