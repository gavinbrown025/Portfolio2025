<script setup>
import { RouterView } from "vue-router";
import TheNav from "@/components/TheNav.vue";

const motion = {
  hidden: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: {
      duration: 1500,
      ease: "easeInOut",
    },
  },
  initial: "hidden",
  animate: "visible",
};
</script>

<template>
  <main
    v-motion
    :initial="motion.hidden"
    :enter="motion.fadeIn"
    class="relative"
  >
    <TheNav class="relative z-10" />
    <RouterView />
  </main>
</template>
