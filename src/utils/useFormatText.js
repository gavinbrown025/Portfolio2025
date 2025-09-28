export const addHighlights = (text, highlight = false) => {
  return text
    .split(/\*\*(.+?)\*\*/g) // split on **highlight**
    .map((part, i) => {
      if (i % 2 === 1 && highlight) {
        return `<span class="text-accent">${part}</span>`;
      }
      return part;
    })
    .join("");
};

export const splitParagraphs = (text, highlight = false) => {
  return text
    .trim()
    .split(/\n\s*\n+/) // split into paragraphs
    .map((p) => addHighlights(p.trim(), highlight));
};