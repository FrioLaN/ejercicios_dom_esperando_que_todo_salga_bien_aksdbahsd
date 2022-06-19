const d = document;

export default function smartVideo(inDocument = false) {
  const ob = {
    true: true,
  };
  const $videos = d.querySelectorAll(".smartVideos");
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.muted = true;
      } else {
        entry.target.pause();
        entry.target.muted = true;
      }
    });
  };
  const OBSERVER = new IntersectionObserver(cb, { threshold: 0.65 });
  $videos.forEach((item) => {
    OBSERVER.observe(item);
  });
  if (inDocument) {
    d.addEventListener("visibilitychange", () => {
      $videos.forEach((media) => {
        media.pause();
      });
    });
  }
}
