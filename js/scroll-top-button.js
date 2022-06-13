const d = document;

export function scrollTop(elemento) {
  if (window.scrollY > 300) {
    elemento.style.opacity = "1";
    elemento.style.zIndex = "3";
  } else if (window.scrollY > 220 && window.screenY < 300) {
    elemento.style.opacity = "0.8";
    elemento.style.zIndex = "3";
  } else if (window.scrollY > 120 && window.scrollY < 220) {
    elemento.style.opacity = "0.4";
    elemento.style.zIndex = "3";
  } else if (window.scrollY < 120) {
    elemento.style.opacity = "0";
    elemento.style.zIndex = "-1";
  }
}
