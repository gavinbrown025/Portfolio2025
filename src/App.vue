<script setup>
import TheNav from "@/components/TheNav.vue";
import TheContact from "@/components/TheContact.vue";

import { mainLoader } from "@/utils/animations.js";
</script>

<template>
  <main
    v-motion
    :initial="mainLoader.initial"
    :enter="mainLoader.fadeIn"
    class="relative"
  >
    <TheNav class="relative z-10" />
    <RouterView />
    <TheContact id="contact" />
    <div id="footer" class="h-48 bg-gb-dk-purple"></div>
  </main>
</template>

