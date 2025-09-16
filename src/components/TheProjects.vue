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
          <div class="flex items-center gap-8 ">
            <h2 class="mb-2">{{ project.title }}</h2>
            <ProjectsDropdown class="grid place-items-center border-white border-2" buttonLabel="See More" />
          </div>

          <h3 class="mb-8">{{ project.company }}</h3>
          <UIMultiParagraph :text="project.description" class="mb-12" />
          <div class="flex gap-8">
            <a :href="project.link" target="_blank">
              <UIButtonAnim>Visit Site</UIButtonAnim>
            </a>
            <a v-if="project.code" :href="project.code" target="_blank">
              <UIButtonAnim>Source Code</UIButtonAnim>
            </a>
          </div>
        </div>
        <ProjectImages :images="project.images" :videos="project.videos" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIMultiParagraph from "@/components/UI/UIMultiParagraph.vue";
import ProjectImages from "@/components/ProjectImages.vue";
import ProjectsDropdown from "@/components/ProjectsDropdown.vue";

import { fadeInBottom } from "@/utils/animations.js";

import { projects } from "@/utils/useProjects.js";

const props = defineProps({
  project: { type: Object, default: () => projects["AdRetriever"] },
});

// selectedWork.value = props.project.company;
</script>
