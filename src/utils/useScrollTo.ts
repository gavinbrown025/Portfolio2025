import type { RouterScrollBehavior } from "vue-router";

export const scrollBehavior: RouterScrollBehavior = (to) => {
  if (!to.hash) return { top: 0 };
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const el = document.querySelector(to.hash!);
      if (el) {
        const rect = el.getBoundingClientRect();
        const target = rect.height > window.innerHeight ? "start" : "center";
        el.scrollIntoView({ behavior: "smooth", block: target });
      }
      resolve(false);
    });
  });
};