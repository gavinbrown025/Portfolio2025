<template>
  <div>
    <h2 class="mb-0">Education</h2>
    <h3 class="mb-6">{{ education.title }} - {{ education.institution }}</h3>
    <UIMultiParagraph :text="education.description" class="mb-12"/>
  </div>
</template>

<script setup>
import { education } from "@/utils/useProjects.js";
import UIMultiParagraph from "@/components/UI/UIMultiParagraph.vue";
</script>
