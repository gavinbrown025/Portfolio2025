<template>
  <button class="btn-gb group" :class="{ 'btn-active': active }">
    <div class="lines group-hover:lines-active" :class="{ 'lines-active': active }" />
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
</script>

<style scoped>
@reference "@/styles/main.css";
.btn-gb {
  @apply relative cursor-pointer min-w-[8rem] sm:min-w-[12rem] grid place-items-center border px-4 py-3 uppercase leading-none transition hover:btn-active;
}

</style>
