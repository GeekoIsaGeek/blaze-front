<script setup lang="ts">
import UserCard from '@/components/browse/UserCard.vue'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import TheProfileIcon from '@/components/icons/TheProfileIcon.vue'
import TheChatIcon from '@/components/icons/TheChatIcon.vue'
</script>

<template>
  <UserCard />
  <div class="h-[10%] rounded-b-xl px-[3%] py-7 flex justify-around">
    <button>
      <TheFireIcon class="navigationButton hover:navigationButtonH" />
    </button>
    <button>
      <TheChatIcon class="navigationButton hover:navigationButtonH" />
    </button>
    <button>
      <TheProfileIcon class="navigationButton hover:navigationButtonH" />
    </button>
  </div>
</template>
