<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>
<template>
  <svg width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
      <feOffset dx="2" dy="2" result="offsetblur" />
      <feFlood flood-color="black" flood-opacity="0.3" />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <path
      :fill="color"
      filter="url(#drop-shadow)"
      d="M 300 192C 353 192 404 213 441 250C 500 317 500 317 559 250C 596 213 647 192 700 192C 753 192 804 213 841 250C 879 288 900 339 900 392C 900 443 880 492 845 529C 845 529 845 530 845 530C 845 530 550 846 550 846C 512 881 487 881 450 846C 450 846 159 533 159 533C 121 495 100 445 100 392C 100 339 121 288 159 250C 196 213 247 192 300 192C 300 192 300 192 300 192"
    />
  </svg>
</template>
