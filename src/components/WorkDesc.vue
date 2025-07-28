<template>
  <div class="bg-gb-dk-purple p-6 sm:py-8 sm:px-12">
    <h2>{{ currentExp?.company }}</h2>
    <h3 class="mb-6">{{ currentExp?.title }}</h3>
    <p class="mb-12">{{ currentExp?.description }}</p>
    <RouterLink :to="`/showcase/${currentExp?.projects[0]}`">
      <UIButtonAnim>Learn More</UIButtonAnim>
    </RouterLink>
  </div>
</template>

<script setup>
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
// import { currentWork } from "@/utils/useProjects.js";

defineProps({
  currentExp: { type: Object, default: () => {} },
});
</script>
