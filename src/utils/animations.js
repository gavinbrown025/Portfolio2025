export const fadeInBottom = {
  initial: { y: 100, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 700, ease: "easeOut" },
  },
};
export const fadeInTop = {
  initial: { y: "-100%", opacity: 0 },
  enter: {
    y: "0%",
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

export const overlaySlideLeft = {
  initial: { x: "0%" },
  slide: {
    x: "-100%",
    transition: { delay: 500, duration: 1500, ease: "easeInOut" },
  },
};
export const overlaySlideRight = {
  initial: { x: "0%" },
  slide: {
    x: "100%",
    transition: { delay: 500, duration: 1500, ease: "easeInOut" },
  },
};

export const lineGrow = {
  initial: { right: "100%" },
  enter: {
    right: "0%",
    transition: { duration: 1000, ease: "easeInOut" },
  },
};
