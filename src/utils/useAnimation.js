export const fadeInBottom = {
  initial: { y: 100, opacity: 0 },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: { duration: 700, ease: "easeOut" },
  },
};

export const mainLoader = {
  initial: { opacity: 0 },
  fadeIn: {
    opacity: 1,
    transition: { duration: 1500, ease: "easeInOut" },
  },
};
