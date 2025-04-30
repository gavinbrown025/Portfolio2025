<template>
  <button class="btn group" :class="{ 'btn-active': active }">
    <div class="lines" :class="{ 'lines-active': active }" />
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
</script>

<style scoped>
@reference "@/styles/main.css";
.btn {
  @apply relative cursor-pointer min-w-[8rem] sm:min-w-[12rem] grid place-items-center border px-4 py-3 uppercase leading-none transition hover:btn-active;
}
.lines {
  @apply group-hover:lines-active h-[calc(100%-1.25rem)] w-4 absolute left-3 sm:left-4 -translate-y-full border-l border-r transition-all duration-500;
}
</style>
