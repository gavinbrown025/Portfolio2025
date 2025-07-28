<template>
  <div>
    <p v-for="(para, i) in paragraphs" :key="i" class="mb-4">{{ para }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({ text: { type: String, default: "" } });

const paragraphs = computed(() => {
  if (!props.text) return [];
  return props.text
    .trim()
    .split(/\n\s*\n+/)
    .map((p) => p.trim());
});
</script>
