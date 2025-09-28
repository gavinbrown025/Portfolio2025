<template>
  <section class="grid place-items-center -mt-16 mb-16">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="w-full grid gap-12 grid-cols-1 md:grid-cols-6 lg:grid-cols-12 grid-rows-[auto] lg:grid-rows-6">
        <!-- Overview (top left, wide) -->
        <div v-if="project.intro" class="col-span-1 md:col-span-4 lg:col-span-8 row-span-2 bg-base-300/70 p-5 shadow-lg flex flex-col justify-center">
          <h4 class="font-bold text-lg text-accent mb-2 flex items-center gap-2">Overview</h4>
          <UIMultiParagraph :text="project.intro" />
        </div>
        <!-- Buttons and Dropdown (top right, not tall) -->
        <div class="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 flex flex-col items-end justify-start gap-4">
          <div class="flex items-center gap-4 w-full justify-end">
            <ProjectsDropdown
              class="grid place-items-center border-base-content border-2"
              buttonLabel="See More"
            />
          </div>
          <div class="flex gap-4 w-full justify-end">
            <a :href="project.link" target="_blank">
              <UIButtonAnim>Visit Site</UIButtonAnim>
            </a>
            <a v-if="project.code" :href="project.code" target="_blank">
              <UIButtonAnim>Source Code</UIButtonAnim>
            </a>
          </div>
        </div>
        <!-- Images/Media (right, under buttons) -->
        <div class="col-span-1 md:col-start-5 md:col-span-2 lg:col-start-9 lg:col-span-4 row-start-2 row-span-2 flex justify-center items-center">
          <ProjectImages :images="project.images" :videos="project.videos" />
        </div>
        <!-- About (below overview, left) -->
        <div v-if="project.about" class="col-span-1 md:col-span-4 lg:col-span-8 row-span-1 bg-base-300/70 p-5 shadow-lg flex flex-col justify-center">
          <h4 class="font-bold text-lg text-accent mb-2 flex items-center gap-2">About</h4>
          <UIMultiParagraph :text="project.about" />
        </div>
        <!-- Features (bottom left) -->
        <div v-if="project.features" class="col-span-1 md:col-span-4 lg:col-span-6 row-span-1 bg-base-300/70 p-5 shadow-lg flex flex-col justify-center">
          <h4 class="font-bold text-lg text-accent mb-2 flex items-center gap-2">Features</h4>
          <UIMultiParagraph :text="project.features" />
        </div>
        <!-- Details (bottom right) -->
        <div v-if="project.description" class="col-span-1 md:col-span-2 lg:col-span-6 row-span-1 bg-base-300/70 p-5 shadow-lg flex flex-col justify-center">
          <h4 class="font-bold text-lg text-accent mb-2 flex items-center gap-2">Details</h4>
          <UIMultiParagraph :text="project.description" />
        </div>
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
