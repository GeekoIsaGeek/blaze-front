<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import { computed, ref } from 'vue'
import TheArrowRightIcon from '@/components/icons/TheArrowRightIcon.vue'
import { LANGUAGES } from '@/assets/languages'
import BottomSheetModal from '@/components/shared/BottomSheetModal.vue'
import LanguageList from '@/components/profile/LanguageList.vue'
import DeleteIcon from '@/components/icons/TheDeleteIcon.vue'

const showModal = ref(false)
const userLanguages = computed(
  () => useUserStore().user?.languages?.sort((a, b) => a.localeCompare(b))
)
const { deleteUserLanguage } = useUserStore()
</script>

<template>
  <div>
    <FieldLabel>Languages</FieldLabel>
    <div
      class="bg-white p-4 pr-2 rounded shadow-sm flex justify-between items-center group cursor-pointer hover:shadow"
      @click="showModal = true"
    >
      <ul class="flex items-center gap-2 flex-wrap">
        <li v-for="langCode in userLanguages" :key="langCode" class="select-none">
          • {{ LANGUAGES[langCode] }}
        </li>
      </ul>
      <TheArrowRightIcon
        class="fill-gray-500 w-7 h-7 min-w-7 group-hover:translate-x-1 transitions"
      />
    </div>

    <BottomSheetModal @hideModal="showModal = false" :showModal="showModal">
      <ul class="flex items-center gap-2 flex-wrap">
        <li
          v-for="langCode in userLanguages"
          :key="langCode"
          class="pl-3 pr-2 py-[2px] bg-fadedPrimary font-semibold text-white rounded-full flex items-center gap-1"
        >
          {{ LANGUAGES[langCode] }}
          <DeleteIcon
            class="w-4 h-4 text-white fill-white cursor-pointer"
            @click="() => deleteUserLanguage(langCode)"
          />
        </li>
      </ul>

      <LanguageList />
    </BottomSheetModal>
  </div>
</template>
