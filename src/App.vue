<script setup>
import TheNav from "@/components/TheNav.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";
import TheProjects from "@/components/TheProjects.vue";

import { mainLoader } from "@/utils/useAnimation.js";

</script>

<template>
  <main
    v-motion
    :initial="mainLoader.initial"
    :enter="mainLoader.fadeIn"
    class="relative"
  >
    <TheNav class="relative z-10" />
    <TheHeader class="min-h-screen" />
    <TheProfile />
    <TheProjects />
  </main>
</template>
