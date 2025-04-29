<script setup>
import TheNav from "@/components/TheNav.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import TheEducation from "@/components/TheEducation.vue";
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
    <TheProfile id="profile" />
    <WorkExperience id="experience" />
    <TheEducation id="education" />
    <TheContact id="contact" />
    <div id="footer" class="h-80 bg-gb-dk-purple"></div>
  </main>
</template>

