<template>
  <div class="bg-gb-dk-purple p-6 sm:py-8 sm:px-12">
    <h2>{{ currentExp.company }}</h2>
    <h3 class="mb-6">{{ currentExp.title }}</h3>
    <p class="mb-12">{{ currentExp.description }}</p>
    <RouterLink :to="`/showcase/${currentExp.projects[0]}`">
      <UIButtonAnim>Featured Work</UIButtonAnim>
    </RouterLink>
  </div>
</template>

<script setup>
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import { currentExp } from "@/utils/useProjects.js";
</script>
