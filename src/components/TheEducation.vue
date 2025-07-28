<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="grid lg:grid-cols-2 justify-between gap-12">
        <EducationDesc />
        <WorkDesc :current-exp="currentDev" class="lg:row-span-2" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { currentDev } from "@/utils/useProjects.js";

import UIContainer from "@/components/UI/UIContainer.vue";
import EducationDesc from "@/components/EducationDesc.vue";
import WorkDesc from "@/components/WorkDesc.vue";

import { fadeInBottom } from "@/utils/animations.js";
</script>
