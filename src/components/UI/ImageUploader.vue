<script lang="ts" setup>
import TheAddImageIcon from '../icons/TheAddImageIcon.vue'
</script>

<template>
  <div
    class="w-full h-full overflow-hidden relative flex items-center rounded-xl justify-center border-[3px] border-dashed border-gray-400 hover:bg-slate-200 transitions"
  >
    <TheAddImageIcon class="fill-gray-400 w-7 h-7" />
    <input
      type="file"
      accept="image/jpeg, iamge/png, image/webp"
      class="scale-[600%] cursor-pointer opacity-0 absolute top-half left-0"
    />
  </div>
</template>
