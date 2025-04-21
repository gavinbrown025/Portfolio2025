<script setup>
import TheNav from "@/components/TheNav.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";
import TheProjects from "@/components/TheProjects.vue";
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
    <TheHeader class="min-h-screen" />
    <TheProfile id="profile"/>
    <TheProjects id="work" />
    <TheContact id="contact" />
  </main>
</template>
@/utils/animation.js