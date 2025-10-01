<template>
  <div class="size-full sm:size-full grid place-items-center">
    <div class="absolute h-[133%] w-[200%] sm:size-full grid place-items-center">
      <div
        class="shape border-5 border-secondary/80"
        :style="circle1"
      />
    </div>
    <div class="absolute h-[150%] w-[200%] sm:size-full grid place-items-center">
      <div
        class="shape border-5 border-secondary/80"
        :style="circle2"
      />
    </div>
  </div>
</template>

<script setup>
import useShape from "@/utils/useShapeRandom.js";
const { styleObject: circle1 } = useShape();
const { styleObject: circle2 } = useShape();
</script>

<style scoped>
.shape {
  min-width: 300px;
  will-change: width, height, border-radius;
}
</style>
