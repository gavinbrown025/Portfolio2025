<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <EducationDesc />
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import EducationDesc from "@/components/EducationDesc.vue";
import { fadeInBottom } from "@/utils/animations.js";
</script>
