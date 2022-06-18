const d = document;

export default function observator(father, aside, sections) {
  const objec = {
    threshold: [0.5, 0.75],
  };

  const $secciones = d.querySelectorAll("section[scroll-spy]");
  const callback = (obs) => {
    obs.forEach((item) => {
      const id = item.target.getAttribute("id");
      if (item.isIntersecting) {
        console.log(id);
        d.querySelector(`a[scroll-spy][href="#${id}"]`).classList.add(
          "-activeLi"
        );
      } else {
        d.querySelector(`a[scroll-spy][href="#${id}"]`).classList.remove(
          "-activeLi"
        );
      }
    });
  };

  const OBSERVER = new IntersectionObserver(callback, objec);
  $secciones.forEach((item) => {
    OBSERVER.observe(item);
  });
}
