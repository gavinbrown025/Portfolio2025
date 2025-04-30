<template>
  <TheProjects :project />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/utils/useProjects.js";
import TheProjects from "@/components/TheProjects.vue";

const route = useRoute();
const project = computed(() => projects[route.params.name]);
</script>
