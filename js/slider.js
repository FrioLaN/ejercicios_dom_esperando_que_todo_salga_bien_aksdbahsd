const d = document;

export default function sliderResp(btns, article) {
  let $btns = d.querySelectorAll(btns),
    $articles = d.querySelectorAll(article),
    i = 0;

  $btns.forEach((item) => {
    item.addEventListener("click", (e) => getActive(e, item));
  });
  function getActive(e, item) {
    if (item.classList.contains("--rigth")) {
      if (i < $articles.length - 1) {
        $articles[i].classList.add("off");
        console.log($btns);
        $btns[1].classList.remove("--initial-btn");
        $btns[0].style.opacity = 1;
        $articles[i].classList.remove("on");
        $articles[i].classList.remove("off--rigth");
        $articles[i].classList.add("off--left");
        i++;
        $articles[i].classList.add("on");
        $articles[i].classList.remove("off--rigth");
        $articles[i].classList.remove("off--left");
        $articles[i].classList.remove("off");
        if (i >= $articles.length - 1) {
          $btns[1].style.opacity = 0.5;
        } else {
          $btns[1].style.opacity = 1;
        }
      }
    } else {
      if (i > 0) {
        $articles[i].classList.add("off");
        $articles[i].classList.remove("on");
        $articles[i].classList.add("off--rigth");
        $articles[i].classList.remove("off--left");
        i--;
        $btns[1].style.opacity = 1;
        $articles[i].classList.add("on");
        $articles[i].classList.remove("off--rigth");
        $articles[i].classList.remove("off--left");
        $articles[i].classList.remove("off");
        if (i <= 0) {
          $btns[0].style.opacity = 0.5;
        } else {
          $btns[0].style.opacity = 1;
        }
      }
    }
  }
}
