<script setup lang="ts">
import UserCard from '@/components/home/UserCard.vue'
import TheFireIcon from '@/components/icons/TheFireIcon.vue'
import TheProfileIcon from '@/components/icons/TheProfileIcon.vue'
import TheChatIcon from '@/components/icons/TheChatIcon.vue'
</script>

<template>
  <div class="bg-white rounded-xl min-h-max shadow-lg">
    <UserCard />
    <div class="bg-white rounded-b-xl px-[3%] py-7 flex justify-around">
      <button>
        <TheFireIcon class="w-[28px] hover:scale-[120%] transition-transform linear duration-200" />
      </button>
      <button>
        <TheChatIcon class="w-[28px] hover:scale-[120%] transition-transform linear duration-200" />
      </button>
      <button>
        <TheProfileIcon
          class="w-[28px] hover:scale-[120%] transition-transform linear duration-200"
        />
      </button>
    </div>
  </div>
</template>
