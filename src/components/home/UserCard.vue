<script setup lang="ts">
import UserCardButtons from '@/components/home/UserCardButtons.vue'
</script>
<template>
  <div class="w-[400px] h-[600px] rounded-xl relative">
    <img src="https://picsum.photos/400/600" class="h-full w-full rounded-t-xl object-cover" />
    <div class="px-[3%] absolute bottom-0 py-4 bg-[rgba(0,0,0,0.2)]">
      <h1 class="text-3xl font-bold text-white">
        Lisa <span class="text-[22px] font-bold">23</span>
      </h1>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, recusandae.
      </p>
      <UserCardButtons />
    </div>
  </div>
</template>
