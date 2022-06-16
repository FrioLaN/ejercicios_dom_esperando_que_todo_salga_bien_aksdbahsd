const doc = document;
const $btns = doc.querySelectorAll(".slider--btn");

$btns.forEach((item) => {
  item.children[0].addEventListener("mouseover", (e) => mouseOver(e, item));
  item.children[0].addEventListener("mouseout", (e) => mouseOut(e, item));
});

function mouseOver(e, p) {
  p.children[1].classList.add("textBtnsSliderIsActive");
  /* e.target.children[1].classList.add("textBtnsSliderIsActive"); */
}
function mouseOut(e, p) {
  /* e.target.children[1].classList.remove("textBtnsSliderIsActive"); */
  p.children[1].classList.remove("textBtnsSliderIsActive");
}
