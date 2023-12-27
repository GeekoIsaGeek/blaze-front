<template>
  <div
    class="w-full min-h-screen flex justify-center items-center desktop:bg-gradient-to-r from-hotpink via-pinkishRed to-orange"
  >
    <div
      id="mainLayout"
      class="h-screen w-full flex flex-col justify-between desktop:w-[500px] desktop:h-[800px] bg-white desktop:rounded-2xl mainWrapperShadow relative overflow-x-hidden"
    >
      <slot />
    </div>
  </div>
</template>
