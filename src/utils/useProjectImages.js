const images = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,webp}', { eager: true });

export function useProjectImages() {
  const imageMap = {};
  for (const path in images) {
    const filename = path.split('/').pop();
    imageMap[filename] = images[path].default;
  }
  return imageMap;
}

const videos = import.meta.glob('@/assets/videos/*.webm', { eager: true });

export function useProjectVideos() {
  const videoMap = {};
  for (const path in videos) {
    const filename = path.split('/').pop();
    videoMap[filename] = videos[path].default;
  }
  return videoMap;
}