<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { computed, ref } from 'vue'
import BottomSheetModal from '@/components/shared/BottomSheetModal.vue'
import { useUserStore } from '@/stores/UserStore'
import { capitalize } from 'vue'
import { GENDERS } from '@/config/constants'
import TheArrowRightIcon from '@/components/icons/TheArrowRightIcon.vue'

const showModal = ref(false)
const userGender = computed(() => useUserStore()?.user?.gender)
const { updateGender } = useUserStore()
</script>

<template>
  <div>
    <FieldLabel>Gender</FieldLabel>
    <div
      class="bg-white p-4 pr-2 rounded shadow-sm flex justify-between items-center group cursor-pointer hover:shadow"
      @click="showModal = true"
    >
      <p>{{ capitalize(userGender || 'Prefer not to specify') }}</p>
      <TheArrowRightIcon
        class="fill-gray-500 w-7 h-7 min-w-7 group-hover:translate-x-1 transitions"
      />
    </div>

    <BottomSheetModal
      @hideModal="showModal = false"
      :showModal="showModal"
      className="!h-[20%] min-h-max"
    >
      <h2 class="text-lg mb-7 uppercase text-center">Gender</h2>
      <ul class="flex items-center gap-2 justify-center">
        <li
          v-for="(gender, i) in GENDERS"
          :key="i"
          :class="[
            'px-4 border shadow rounded-lg flex items-center gap-1 hover:bg-primary hover:text-white transitions hover:border-transparent cursor-pointer',
            gender === userGender ? 'border-fadedPrimary' : 'border-slate-300'
          ]"
          @click="
            () => {
              updateGender(gender)
              showModal = false
            }
          "
        >
          {{ capitalize(gender) }}
        </li>
      </ul>
    </BottomSheetModal>
  </div>
</template>
