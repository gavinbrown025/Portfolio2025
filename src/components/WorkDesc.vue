<template>
  <div class="px-6">
    <h3 class="text-xl font-bold mb-2 ">
      {{ currentExp?.title }}
      <span class="text-accent">@ {{ currentExp?.company }}</span>
    </h3>
    <p class="mb-6 italic text-sm text-secondary">
      {{ currentExp?.date }}
    </p>
    <UIMultiParagraph :text="currentExp?.description" class="mb-8" >
      <UIIcon icon="arrow_right" class="text-accent size-8" />
    </UIMultiParagraph>
    <RouterLink :to="`/showcase/${currentExp?.projects[0]}`">
      <UIButtonAnim>Learn More</UIButtonAnim>
    </RouterLink>
  </div>
</template>

<script setup>
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIIcon from "@/components/UI/UIIcon.vue";
import UIMultiParagraph from "@/components/UI/UIMultiParagraph.vue";
// import { currentWork } from "@/utils/useProjects.js";

defineProps({
  currentExp: { type: Object, default: () => {} },
});
</script>
