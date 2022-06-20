const d = document,
  w = window;

export default function smartVideo(inDocument = false) {
  const ob = {
    true: true,
  };
  const $videos = d.querySelectorAll(".smartVideos");
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      if (inDocument) {
        w.addEventListener("visibilitychange", () =>
          d.visibilityState === "visible"
            ? entry.target.play()
            : entry.target.pause()
        );
      }
    });
  };
  const OBSERVER = new IntersectionObserver(cb, { threshold: 0.65 });
  $videos.forEach((item) => {
    OBSERVER.observe(item);
  });
}
