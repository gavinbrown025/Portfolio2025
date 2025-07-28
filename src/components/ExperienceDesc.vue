<template>
  <div>
    <h2 class="mb-6">Experience</h2>
    <p class="mb-10">
      I have worked with a variety of companies, from small startups to large
      corporations. My experience includes front-end development, back-end
      development, and project management.
    </p>
    <div
      class="flex flex-wrap gap-8 justify-center sm:justify-start"
    >
      <UIButtonAnim
        v-for="exp in workExp"
        :key="exp.company"
        :active="selectedWork === exp.company"
        @click="selectedWork = exp.company"
      >
        {{ exp.company }}
      </UIButtonAnim>
    </div>
  </div>
</template>

<script setup>
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import { workExp, selectedWork } from "@/utils/useProjects.js";
</script>
