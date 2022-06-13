const d = document;

export default function mouse(controls, cam) {
  cam.addEventListener("mouseover", () => (controls.style.opacity = "1"));
  cam.addEventListener("mouseout", () => (controls.style.opacity = "0"));
  controls.addEventListener("mouseover", () => (controls.style.opacity = "1"));
  controls.addEventListener("mouseout", () => (controls.style.opacity = "0"));
}
