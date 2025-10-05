<template>
  <section class="py-16">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div
        class="flex justify-between gap-8 pb-6 mb-6 border-b border-secondary/30"
      >
        <div>
          <UIHeadingAnim>{{ project.title }}</UIHeadingAnim>
          <p class="text-secondary">{{ project.company }}</p>
        </div>
        <ProjectsDropdown>
          <UIButtonAnim>Other Projects</UIButtonAnim>
        </ProjectsDropdown>
      </div>
      <div class="w-full grid gap-8 grid-cols-1 md:grid-cols-12 items-stretch">
        <!-- Overview -->
        <div class="md:col-span-7">
          <h4 class="font-bold text-lg text-accent mb-2">Overview</h4>
          <UIMultiParagraph :text="project.intro" />
          <div class="flex gap-4">
            <a :href="project.link" target="_blank">
              <UIButtonAnim>Visit Site</UIButtonAnim>
            </a>
            <a v-if="project.code" :href="project.code" target="_blank">
              <UIButtonAnim>Source Code</UIButtonAnim>
            </a>
          </div>
        </div>
        <!-- Images/Media -->
        <div
          class="md:col-span-7 row-span-2 -my-6 flex justify-center items-center"
        >
          <ProjectImages :images="project.images" :videos="project.videos" />
        </div>
        <!-- About -->
        <div
          v-if="project.about"
          class="md:col-start-8 md:col-span-5 md:row-start-1 md:row-span-2 bg-base-300/70 p-5 shadow-lg"
        >
          <h4 class="font-bold text-lg text-accent mb-2">About</h4>
          <UIMultiParagraph :text="project.about" />
        </div>
        <!-- Details -->
        <div
          v-if="project.description"
          class="md:col-span-full bg-base-300/70 p-5 shadow-lg"
        >
          <h4 class="font-bold text-lg text-accent mb-2">Details</h4>
          <UIMultiParagraph :text="project.description" />
        </div>

        <!-- Features -->
        <div
          v-if="project.features"
          class="md:col-start-8 md:col-span-5 md:row-start-3 bg-base-300/70 p-5 shadow-lg"
        >
          <h4 class="font-bold text-lg text-accent mb-2">Features</h4>
          <div class="flex flex-wrap gap-2">
            <p
              v-for="value in project.features"
              :key="value"
              class="text-xs py-1 px-2 mb-2 bg-base-200/50 backdrop-blur-sm border border-accent rounded-md"
            >
              {{ value }}
            </p>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIHeadingAnim from "@/components/UI/UIHeadingAnim.vue";
import UIMultiParagraph from "@/components/UI/UIMultiParagraph.vue";
import ProjectImages from "@/components/ProjectImages.vue";
import ProjectsDropdown from "@/components/ProjectsDropdown.vue";

import { fadeInBottom } from "@/utils/animations.js";

import { projects } from "@/utils/useProjects.js";

const props = defineProps({
  project: { type: Object, default: () => projects["AdRetriever"] },
});
</script>
