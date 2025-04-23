<template>
  <section class="min-h-screen">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
      class="pt-12 pb-48 grid min-h-min items-center"
    >
      <div class="flex flex-wrap items-center gap-12">
        <div class="shrink grow basis-1/3">
          <h2 class="mb-8">Profile</h2>
          <p>
            I'm a Front-end Developer based in Calgary, AB, Canada. <br />
            <br />
            When I’m not climbing, biking, or playing guitar, I’m building
            interfaces that bring the capabilities of the web to your
            fingertips. <br />
            <br />
            While I spend most of my time with User Interfaces, but I also enjoy
            getting involved in design, and back-end development. <br />
            <br />
            Browse some of my work, view my skills, or get in touch. You can
            also find me on Github and LinkedIn.
          </p>
        </div>
        <div class="grow sm:bg-gb-dk-purple p-0 sm:py-8 sm:px-12">
          <div v-for="skills in skillLists" :key="skills.title">
            <h3 class="mb-6">{{ skills.title }}</h3>
            <ul class="mb-8 flex gap-4">
              <span>| |</span>
              <li
                class="flex gap-4"
                v-for="(item, i) in skills.items"
                :key="item"
              >
                <span>{{ item }}</span>
                <span v-if="i !== skills.items.length - 1">|</span>
              </li>
              <span>| |</span>
            </ul>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import { fadeInBottom } from "@/utils/animations.js";

const skillLists = [
  {
    title: "Languages",
    items: ["JavaScript", "CSS/SCSS", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Vue", "React", "WebFlow", "Shopify"],
  },
  {
    title: "Tools",
    items: ["Gitub", "Adobe Suite", "Jira", "Slack"],
  },
];
</script>

<style scoped>
ul > * {
  white-space: nowrap;
}
</style>
@/utils/animation.js
