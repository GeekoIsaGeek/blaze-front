<script setup lang="ts">
import FieldLabel from '@/components/shared/FieldLabel.vue'
import { useUserStore } from '@/stores/UserStore'
import TheArrowRightIcon from '@/components/icons/TheArrowRightIcon.vue'

const interests = useUserStore().user?.interests
</script>

<template>
  <div>
    <FieldLabel>Interests</FieldLabel>
    <div
      class="bg-white p-4 pr-2 rounded shadow-sm flex justify-between items-center group cursor-pointer hover:shadow"
    >
      <ul class="flex items-center gap-2 flex-wrap">
        <li v-for="(obj, i) in interests" :key="obj.id" class="select-none">
          {{ obj.interest }}{{ `${i !== interests!.length - 1 ? ',' : ''}` }}
        </li>
      </ul>
      <TheArrowRightIcon class="fill-gray-500 w-7 h-7 group-hover:translate-x-1 transitions" />
    </div>
  </div>
</template>
