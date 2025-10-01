<template>
  <div class="grid grid-cols-12 grid-rows-1 items-center gap-4">
    <div
      class="h-full md:h-auto !row-start-1 col-span-full md:col-span-8 lg:col-span-7 md:aspect-video bg-base-100"
      :class="{
        '!col-start-1': !flip,
        'md:col-start-6!': flip,
      }"
    >
      <div class="relative size-full overflow-hidden">
        <UIOverlaySlide :dir="!flip ? 'left' : 'right'" />
        <img :src="image" alt="" class="object-cover w-full h-full" />
      </div>
    </div>
    <div
      class="not-md:h-full not-md:p-6 not-md:bg-base-300/60 not-md:backdrop-blur-sm flex flex-col z-10 row-start-1 col-start-1 col-span-full md:col-span-8 lg:col-span-7"
      :class="{
        'md:col-start-6 lg:col-start-7 md:items-end md:text-right': !flip,
        '!col-start-1': flip,
      }"
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <h4 class="font-mono text-accent">Feature Project</h4>
      <h3>{{ currentProject.title }}</h3>
      <UIMultiParagraph
        :text="currentProject.intro"
        class="md:bg-base-300 md:p-4 mb-8"
      />
      <ul class="flex gap-4 text-secondary mb-8">
        <li
          v-for="value in currentProject.stack"
          :key="value"
          class="font-mono text-secondary text-sm"
        >
          {{ value }}
        </li>
      </ul>
      <div
        class="flex flex-wrap gap-8"
        :class="{
          'md:justify-end': !flip,
        }"
      >
        <RouterLink :to="`/showcase/${currentProject.title}`">
          <UIButtonAnim> Learn More </UIButtonAnim>
        </RouterLink>
        <a
          :href="currentProject.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIButtonAnim> Visit </UIButtonAnim>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIButtonAnim from "./UI/UIButtonAnim.vue";
import { fadeInBottom } from "@/utils/animations.js";
import UIOverlaySlide from "./UI/UIOverlaySlide.vue";
import { projects } from "@/utils/useProjects.js";
import { useProjectImages } from "@/utils/useProjectImages";
import UIMultiParagraph from "./UI/UIMultiParagraph.vue";

const props = defineProps({
  project: { type: String, default: "Expense Tracker" },
  flip: Boolean,
});

const currentProject = projects[props.project];
const imageMap = useProjectImages();
const image = imageMap[currentProject.thumb];
</script>
