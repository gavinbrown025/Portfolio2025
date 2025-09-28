<template>
  <div>
    <div v-for="(para, i) in paragraphs" :key="i" class="flex">
      <slot />
      <p  class="mb-4" v-html="para"></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { splitParagraphs } from "@/utils/useFormatText";

const props = defineProps({ text: { type: String, default: "" } });

const paragraphs = computed(() => {
  if (!props.text) return [];
  return splitParagraphs(props.text, true);
});
</script>
