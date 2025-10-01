<template>
  <button
    class="btn btn-outline btn-accent relative group font-mono hover:btn-active"
    :class="{ 'btn-active': active }"
  >
    <div
      class="lines group-hover:lines-active"
      :class="{ 'lines-active': active }"
    />
    <span class="flex items-center gap-2 px-4">
      <slot></slot>
      <UIIcon v-if="icon" :icon="icon" class="!text-xl" />
    </span>
  </button>
</template>

<script setup>
import UIIcon from "./UIIcon.vue";

defineProps({
  active: { type: Boolean, default: false },
  icon: { type: String, default: "" },
});
</script>
