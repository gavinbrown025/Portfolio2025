const images = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,webp}', { eager: true });

export function useProjectImages() {
  const imageMap = {};
  for (const path in images) {
    const filename = path.split('/').pop();
    imageMap[filename] = images[path].default;
  }
  return imageMap;
}