<template>
  <div
    class="w-full min-h-screen flex justify-center items-center desktop:bg-gradient-to-r from-hotpink via-pinkishRed to-orange"
  >
    <div
      class="h-screen w-full flex flex-col justify-end desktop:w-[500px] desktop:h-[800px] bg-white rounded-2xl min-h-max mainWrapperShadow"
    >
      <slot />
    </div>
  </div>
</template>
