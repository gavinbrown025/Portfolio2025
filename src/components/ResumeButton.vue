<template>
  <UIButtonAnim @click="downloadResume">
    Download Resume
  </UIButtonAnim>
</template>

<script setup>
import UIButtonAnim from './UI/UIButtonAnim.vue';
import resumePdf from '../assets/Gavin_Brown_Resume_2025.pdf';

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = resumePdf;
  link.setAttribute('download', 'Gavin_Brown_Resume_2025.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
