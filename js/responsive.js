const d = document,
  w = window;

export function responsive(mq, id, mContent, dContent) {
  let mediaQuery = w.matchMedia(mq);
  const setResponsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = dContent;
    } else {
      d.getElementById(id).innerHTML = mContent;
    }
  };
  d.addEventListener("change", (e) => {});
  mediaQuery.addEventListener("change", setResponsive);
  setResponsive(mediaQuery);
}
