<script lang="ts" setup>
import ImageUploader from '@/components/UI/ImageUploader.vue'
import TheDeleteIcon from '@/components/icons/TheDeleteIcon.vue'
import DialogModal from '@/components/UI/DialogModal.vue'
import useDeletePhoto from '@/composables/useDeletePhoto'
import { ref } from 'vue'

const props = defineProps<{
  url: string
  id: number
}>()

const photo = ref(props?.url)
const showModal = ref(false)

const { deletePhoto } = useDeletePhoto()

const handleDeletion = async () => {
  if (props.id) {
    const status = await deletePhoto(props.id)
    if (status === 200) {
      photo.value = ''
    }
  }
  showModal.value = false
}
</script>

<template>
  <div class="h-32 w-full bg-stone-100 rounded-xl hover:grayscale-[30%] transitions relative">
    <img :src="photo" class="w-full h-full object-cover rounded-xl" v-if="photo" />
    <ImageUploader :photo="photo" @setPhoto="(selected) => (photo = selected)" v-else />

    <TheDeleteIcon
      class="absolute w-8 h-8 -top-1 -right-[3px] fill-white stroke-gray-200 cursor-pointer"
      v-if="photo"
      @click="showModal = true"
    />
    <DialogModal
      dialogQuestion="Are you sure you want to delete the photo?"
      @closeModal="() => (showModal = false)"
      @handler="handleDeletion"
      v-if="showModal"
    />
  </div>
</template>
