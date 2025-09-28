<template>
  <button class="btn btn-outline btn-accent relative group font-mono hover:btn-active" :class="{ 'btn-active': active }">
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
