<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="grid lg:grid-cols-2 justify-between gap-12">
        <EducationDesc />
        <div>
          <div class="flex flex-wrap gap-8 justify-center sm:justify-start">
            <UIButtonAnim
              v-for="exp in devExp"
              :key="exp.company"
              :active="selectedDev === exp.company"
              @click="selectedDev = exp.company"
            >
              {{ exp.company }}
            </UIButtonAnim>
          </div>
          <WorkDesc :current-exp="currentDev" />
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { currentDev } from "@/utils/useProjects.js";
import { devExp, selectedDev } from "@/utils/useProjects.js";

import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIContainer from "@/components/UI/UIContainer.vue";
import EducationDesc from "@/components/EducationDesc.vue";
import WorkDesc from "@/components/WorkDesc.vue";

import { fadeInBottom } from "@/utils/animations.js";
</script>
