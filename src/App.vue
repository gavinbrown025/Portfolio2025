<script setup>
import { RouterView } from "vue-router";
import TheNav from "@/components/TheNav.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";

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
    <TheHeader class="min-h-screen" />
    <TheProfile class="min-h-screen" />
    <RouterView />
  </main>
</template>
