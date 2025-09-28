<template>
  <UIContainer class="bg-black/30 min-h-[80vh]">
    <div class="rounded-full bg-white/30 h- "></div>
    <div class="hourglass"></div>
  </UIContainer>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
</script>

<style scoped>
.hourglass {
  width: 80px;
  height: 40px;
  background: #0a1235;

  clip-path: path("M20 0 H140 A20 20 0 0 0 140 40 H20 A20 20 0 0 0 20 0 Z");
}
</style>
