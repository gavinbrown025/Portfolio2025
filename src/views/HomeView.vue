<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheProfile from "@/components/TheProfile.vue";
import TheExperience from "@/components/TheExperience.vue";
import TheEducation from "@/components/TheEducation.vue";
</script>

<template>
  <TheHeader class="min-h-screen" />
  <TheProfile id="profile" />
  <TheExperience id="experience" />
  <TheEducation id="education" />
</template>
