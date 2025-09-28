<script setup>
import { watchEffect, ref, computed } from "vue";
import TheNav from "@/components/TheNav.vue";
import TheContact from "@/components/TheContact.vue";

import { mainLoader } from "@/utils/animations.js";
import { useScroll } from "@vueuse/core";

const { y, directions, isScrolling } = useScroll(window);

const showNav = ref(true);
const atTop = computed(() => y.value < 80);

watchEffect(() => {
  if (atTop.value) return (showNav.value = true);
  if (isScrolling.value) showNav.value = directions.top;
});
</script>

<template>
  <!-- <div class="sticky top-4 w-10 h-10 bg-red-500">{{ activeView }}</div> -->
  <TheNav
    class="sticky z-10 transition-all duration-500"
    :class="{ '-translate-y-full': !showNav, 'bg-base-100/90': !atTop }"
  />
  <main
    v-motion
    :initial="mainLoader.initial"
    :enter="mainLoader.fadeIn"
    class="relative"
  >
    <RouterView />
    <TheContact id="contact" />
    <div id="footer" class="h-12 bg-base-100" />
  </main>
</template>
