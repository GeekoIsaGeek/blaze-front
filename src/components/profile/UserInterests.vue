<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import TheArrowRightIcon from '@/components/icons/TheArrowRightIcon.vue'
import BottomSheetModal from '@/components/shared/BottomSheetModal.vue'
import DeleteIcon from '@/components/icons/TheDeleteIcon.vue'
import { ref } from 'vue'
import InterestsList from '@/components/profile/InterestsList.vue'
import type { Interest } from '@/types/Pinia'

const currentInterests = ref(useUserStore().user?.interests || [])
const showModal = ref(false)
const { removeInterest } = useUserStore()

const deleteInterest = async (id: number) => {
  await removeInterest(id)
  currentInterests.value = currentInterests.value.filter(
    (interest: { id: number; interest: string }) => interest.id !== id
  )
}
const updateCurrentInterests = (interest: Interest) => {
  currentInterests.value = [...currentInterests.value, interest]
}
</script>

<template>
  <div>
    <FieldLabel>Interests</FieldLabel>
    <div
      class="bg-white p-4 pr-2 rounded shadow-sm flex justify-between items-center group cursor-pointer hover:shadow"
      @click="showModal = true"
    >
      <ul class="flex items-center gap-2 flex-wrap">
        <li v-for="(obj, i) in currentInterests" :key="obj.id" class="select-none">
          {{ obj.interest }}{{ `${i !== currentInterests!.length - 1 ? ',' : ''}` }}
        </li>
      </ul>
      <TheArrowRightIcon
        class="fill-gray-500 w-7 h-7 min-w-7 group-hover:translate-x-1 transitions"
      />
    </div>

    <BottomSheetModal @hideModal="showModal = false" :showModal="showModal">
      <p class="font-bold text-right uppercase mb-3">{{ currentInterests?.length || 0 }}/5</p>
      <ul class="flex items-center gap-2 flex-wrap">
        <li
          v-for="obj in currentInterests"
          :key="obj.id"
          class="pl-3 pr-2 py-[2px] bg-fadedPrimary font-semibold text-white rounded-full flex items-center gap-1"
        >
          {{ obj.interest }}
          <DeleteIcon
            class="w-4 h-4 text-white fill-white cursor-pointer"
            @click="() => deleteInterest(obj.id)"
          />
        </li>
      </ul>

      <InterestsList :updateCurrentInterests="updateCurrentInterests" />
    </BottomSheetModal>
  </div>
</template>
