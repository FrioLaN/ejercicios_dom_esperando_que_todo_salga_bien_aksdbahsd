const d = document;

export default function observator(father, aside, sections) {
  const $active = d.querySelector(".doce");
  const objec = {
    root: null,
    rootMargin: "0px",
    threshold: 0.0,
  };
  let $father = d.getElementById(father);
  let $aside = d.getElementById(aside);
  let $secciones = d.querySelectorAll(sections);
  let $lista = $aside.children[0].children[0].children;
  const callback = (obs) => {
    if (obs[0].isIntersecting) {
      $secciones.forEach((item) => {
        OBSERVER_SECTION.observe(item);
      });

      $father.classList.add("padre-is-active");
      $aside.classList.add("rigth-barActive");
    }
  };
  const controlSections = (item) => {
    item.forEach((el) => {
      if (el.isIntersecting) {
        for (const ele of $lista) {
          if (el.target.classList[1] === ele.children[0].getAttribute("id")) {
            ele.children[0].classList.add("-activeLi");
          } else {
            ele.children[0].classList.remove("-activeLi");
          }
        }
      }
    });
  };
  const OBSERVER = new IntersectionObserver(callback, objec);
  const OBSERVER_SECTION = new IntersectionObserver(controlSections, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  });
  OBSERVER.observe($active);
}
