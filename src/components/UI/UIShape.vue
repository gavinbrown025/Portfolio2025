<template>
  <div class="h-full w-full grid place-items-center">
    <div class="shape absolute border-5 border-gb-lt-grey/80 " :style="circle1"></div>
    <div class="shape absolute border-5 border-gb-lt-grey/80 " :style="circle2"></div>
    <!-- <Logo class="h-40 w-40 object-contain" /> -->
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
  /* background: radial-gradient(circle, #515170 0%, #1c1c32 75%, #00000000 92%); */
}
</style>
