<template>
  <button>
    <div class="lines"></div>
    <slot></slot>
  </button>
</template>

<style scoped>
@reference "@/styles/main.css";
button {
  @apply relative cursor-pointer flex min-w-[8rem] sm:min-w-[12rem] items-center justify-center border px-4 py-3 font-light uppercase transition;
  .lines {
    @apply absolute left-4 h-8 w-4 -translate-y-full border-l border-r transition-all duration-500;
  }
  &:hover {
    @apply bg-gb-lt-purple text-black;
    .lines {
      @apply -translate-y-0;
      border-color: black;
      width: calc(100% - 2rem);
    }
  }
}
</style>
