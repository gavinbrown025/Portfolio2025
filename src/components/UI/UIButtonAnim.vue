<template>
  <button class="btn-gb group" :class="{ 'btn-active': active }">
    <div class="lines group-hover:lines-active" :class="{ 'lines-active': active }" />
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
</script>
