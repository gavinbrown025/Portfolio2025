export const splitParagraphs = (text) => {
  return text
    .trim()
    .split(/\n\s*\n+/)
    .map((p) => p.trim());
};
