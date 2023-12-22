<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import TheArrowRightIcon from '@/components/icons/TheArrowRightIcon.vue'
import BottomSheetModal from '@/components/shared/BottomSheetModal.vue'
import { ref } from 'vue'

const interests = useUserStore().user?.interests || []
const showModal = ref(false)
</script>

<template>
  <div>
    <FieldLabel>Interests</FieldLabel>
    <div
      class="bg-white p-4 pr-2 rounded shadow-sm flex justify-between items-center group cursor-pointer hover:shadow"
      @click="showModal = true"
    >
      <ul class="flex items-center gap-2 flex-wrap">
        <li v-for="(obj, i) in interests" :key="obj.id" class="select-none">
          {{ obj.interest }}{{ `${i !== interests!.length - 1 ? ',' : ''}` }}
        </li>
      </ul>
      <TheArrowRightIcon class="fill-gray-500 w-7 h-7 group-hover:translate-x-1 transitions" />
    </div>
    <BottomSheetModal @hideModal="() => (showModal = false)" v-if="showModal"> </BottomSheetModal>
  </div>
</template>
