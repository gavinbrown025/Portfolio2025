<template>
  <button
    class="group relative cursor-pointer min-w-[8rem] sm:min-w-[12rem] grid place-items-center border px-4 py-3 uppercase transition hover:activeButton"
    :class="{ activeButton: active }"
  >
    <div
      class="group-hover:activeLines absolute left-4 h-6 w-4 -translate-y-full border-l border-r transition-all duration-500"
      :class="{ activeLines: active }"
    />
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
</script>

<style scoped>
@reference "@/styles/main.css";
</style>
