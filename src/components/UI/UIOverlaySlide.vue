<template>
  <div class="not-md:hidden absolute size-full overflow-hidden rounded-lg">
    <div
      v-motion
      :initial="animation.initial"
      :visible-once="animation.slide"
      class="size-full backdrop-blur-xs bg-primary/25"
    />
    <slot />
  </div>
</template>

<script setup>
import { overlaySlideRight, overlaySlideLeft } from "@/utils/animations.js";

const props = defineProps({ dir: { type: String, default: "right" } });

const animation = props.dir === "right" ? overlaySlideRight : overlaySlideLeft;
</script>
