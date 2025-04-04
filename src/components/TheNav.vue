<template>
  <UIContainer class="!px-0">
    <nav class="flex justify-between px-8 py-4">
      <UILogo />
      <ul class="flex basis-1/2 items-center justify-end border-b text-3xl">
        <li v-for="link in links" :key="link.to">
          <a class="px-4 py-2" :href="link.to">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </UIContainer>
</template>

<script setup>
import UILogo from '@/components/UI/UILogo.vue'
import UIContainer from '@/components/UI/UIContainer.vue'

const links = [
  { name: 'Work', link: '#work' },
  { name: 'Profile', link: '#profile' },
  { name: 'Contact', link: '#contact' },
]
</script>

<style scoped>

</style>