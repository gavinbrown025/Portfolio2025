<template>
  <section class="grid place-items-center -mt-16 mb-16">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="flex flex-wrap items-center gap-12">
        <!-- :class="{ 'flex-row-reverse': i % 2 === 1 }" -->
        <div class="min-w-[16rem] shrink grow basis-1/3 space-y-16">
          <h2 class="mb-2">{{ project.title }}</h2>
          <h3 class="mb-8">{{ project.company }}</h3>
          <p>{{ project.description }}</p>
          <div class="flex gap-8">
            <a :href="project.link" target="_blank">
              <UIButtonAnim>Visit Site</UIButtonAnim>
            </a>
            <a v-if="project.code" :href="project.code" target="_blank">
              <UIButtonAnim>Source Code</UIButtonAnim>
            </a>
          </div>
        </div>
        <ProjectImages :images="project.images" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import ProjectImages from "@/components/ProjectImages.vue";

import { fadeInBottom } from "@/utils/animations.js";

import { projects, selectedWork } from "@/utils/useProjects.js";

const props = defineProps({
  project: { type: Object, default: () => projects["AdRetriever"] },
});

// selectedWork.value = props.project.company;
</script>
