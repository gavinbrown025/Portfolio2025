<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <UIHeadingAnim class="mb-8">Things I've Built</UIHeadingAnim>
      <div class="flex flex-col gap-40">
        <FeatureProject
          v-for="project in projectsList"
          :key="project"
          :project="project"
          :flip="project === 'Twenty Eighty'"
        />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { fadeInBottom } from "@/utils/animations.js";
import UIContainer from "./UI/UIContainer.vue";
import UIHeadingAnim from "./UI/UIHeadingAnim.vue";
import FeatureProject from "./FeatureProject.vue";

const projectsList = ["Expense Tracker", "Twenty Eighty"];
</script>
