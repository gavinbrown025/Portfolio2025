<template>
  <h2 class="relative w-min text-nowrap text-shadow-sm  pr-6">
    <slot />
    <div
      class="absolute bottom-0 -left-1 -right-8 -z-10 h-1/4 bg-secondary/80"
      v-motion
      :initial="lineGrow.initial"
      :visible-once="lineGrow.enter"
    ></div>
  </h2>
</template>

<script setup>
import { lineGrow } from "@/utils/animations.js";
</script>
