<script setup lang="ts">
import UserDetails from '@/components/feed/UserDetails.vue'
import ArrowDownCircle from '@/components/icons/TheArrowDownCircleIcon.vue'
import SliderArrows from '@/components/feed/SliderArrows.vue'
import UserCardIndicators from '@/components/feed/UserCardIndicators.vue'
import { getPhotoUrl } from '@/helpers/string'
import { computed, ref } from 'vue'
import Loading from '@/components/shared/LoadingSpinner.vue'
import type { Person } from '@/types/MeetingPerson'
import { unmatch } from '@/services/MatchedUser'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  user: Person | undefined
  isLoading: boolean
}>()

const showDetails = ref(false)
const currentPhotoId = ref(0)
const currentPhoto = computed(() => props?.user?.photos?.[currentPhotoId.value])
const { push: navigate } = useRouter()
const { id } = useRoute().params

const handleUnmatch = async () => {
  const status = await unmatch(id?.toString())
  if (status === 200) {
    navigate({ name: 'chats' })
  }
}
</script>
<template>
  <Loading v-if="isLoading" class="mt-[50%]" />

  <div
    v-if="user"
    class="w-full h-[88%] desktop:h-[86%] desktop:max-h-[86%] overflow-auto desktop:rounded-t-xl snap-y scroll-smooth absolute top-[8%] group"
  >
    <div
      class="bg-gradient-to-t from-black/80 desktop:from-black/60 from-20% to-60% to-transparent w-full h-full absolute top-0 left-0"
    ></div>
    <img
      :src="getPhotoUrl(currentPhoto?.url || '')"
      prefetch
      class="h-full w-full rounded-t-xl object-cover select-none"
    />

    <UserCardIndicators :currentPhoto="currentPhoto" :photos="user?.photos" />

    <SliderArrows
      :photos="user?.photos"
      :currentPhoto="currentPhoto"
      v-model:currentPhotoId="currentPhotoId"
    />

    <div
      class="px-[3%] absolute w-full bottom-0 py-4 z-10 select-none"
      @touchstart.stop
      @mousedown.stop
    >
      <TransitionWrapper idleClass="!-translate-x-14">
        <div v-show="!showDetails" class="mb-10">
          <h1 class="text-3xl font-bold text-white flex justify-between items-center">
            <p>
              {{ user?.username }}
              <span class="text-[22px] font-bold">{{ user?.age }}</span>
            </p>
          </h1>
          <p class="text-white">
            {{ user?.bio }}
          </p>
        </div>
      </TransitionWrapper>

      <ArrowDownCircle
        class="w-7 h-7"
        @click="showDetails = !showDetails"
        :class="[
          showDetails ? 'rotate-90' : '-rotate-90',
          'transitions hover:scale-110 cursor-pointer absolute right-6 bottom-6 shadow-lg rounded-full'
        ]"
        @mouseup.stop
        @touchend.stop
      />
    </div>
    <div class="snap-center">
      <UserDetails :showDetails="showDetails" :data="user" @mousedown.stop @touchstart.stop />
      <button
        class="font-medium text-lg py-1.5 rounded-xl mx-auto shadow w-[60%] flex justify-center items-center bg-pinkishRed text-white transitions hover:text-gray-600 hover:bg-gray-100 border border-transparent hover:border-slate-300"
        @click="handleUnmatch"
        v-if="showDetails"
      >
        Unmatch
      </button>
    </div>
  </div>
</template>
