<template>
  <button class="btn-gb group font-mono" :class="{ 'btn-active': active }">
    <div
      class="lines group-hover:lines-active"
      :class="{ 'lines-active': active }"
    />
    <span class="px-4">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
</script>
