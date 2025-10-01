<template>
  <footer
    class="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
  >
    <aside>
      <UILogo />
      <p>
        <span class="text-accent font-bold text-base"> Gavin Brown FE Dev </span>
        <br />
        Making Digital experiences smooth and simple.
      </p>
    </aside>
    <nav>
      <h6 class="footer-title text-secondary font-mono">Projects</h6>
      <RouterLink to="showcase/ProjectName" class="link link-hover">Expense Tracker</RouterLink>
      <RouterLink to="showcase/ProjectName" class="link link-hover">Twenty Eighty</RouterLink>
      <RouterLink to="showcase/ProjectName" class="link link-hover">Ad Retriever</RouterLink>
      <RouterLink to="showcase/ProjectName" class="link link-hover">WasteWaterPro</RouterLink>
    </nav>
    <nav>
      <h6 class="footer-title text-secondary font-mono">Navigation</h6>
      <RouterLink to="/#profile" class="link link-hover">Profile</RouterLink>
      <RouterLink to="/#experience" class="link link-hover">Experience</RouterLink>
      <RouterLink to="/#projects" class="link link-hover">Projects</RouterLink>
      <RouterLink to="/#contact" class="link link-hover">Contact</RouterLink>
    </nav>
    <!-- <nav>
      <h6 class="footer-title text-secondary font-mono">Legal</h6>
      <RouterLink to="terms-of-use" class="link link-hover">Terms of use</RouterLink>
      <RouterLink to="privacy-policy" class="link link-hover">Privacy policy</RouterLink>
      <RouterLink to="cookie-policy" class="link link-hover">Cookie policy</RouterLink>
    </nav> -->
  </footer>
</template>

<script setup>
import UILogo from "@/components/UI/UILogo.vue";
</script>

