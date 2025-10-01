<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";
import TheExperience from "@/components/TheExperience.vue";
import FeatureProjects from "@/components/FeatureProjects.vue";

import { useActiveView } from "@/utils/useActiveView.js";

useActiveView();
</script>

<template>
  <TheHeader class="min-h-screen" />
  <TheProfile id="profile" />
  <TheExperience id="experience" />
  <FeatureProjects id="projects" />
</template>
