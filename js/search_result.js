const d = document,
  n = navigator,
  w = window;

export default function searching(idSearch, idSection) {
  let $element = d.getElementById(idSearch),
    $section = d.getElementById(idSection),
    searcher = [],
    searcherToString = "",
    dblclick = false,
    aux = false;
  $element.addEventListener("keydown", (e) => {
    $element.addEventListener("dblclick", (e) => {
      dblclick = true;
    });
    if (!e.target.value && e.key.length === 1) {
      aux = true;
      searcherToString = e.key;
      searcher.push(e.key);
    } else if (dblclick) {
      if (e.key === "Backspace") {
        searcherToString = "";
        searcher = [];
        dblclick = false;
      } else if (e.key.length === 1) {
        dblclick = false;
        searcher = [e.key];
      }
    } else if (e.key === "Backspace") {
      searcher.pop();
    } else if (
      e.key.length === 1 &&
      e.altKey === false &&
      e.ctrlKey === false
    ) {
      if (aux && e.key.length === 1) {
        searcher.push(e.key);
        aux = false;
      } else if (e.key.length === 1) {
        searcher.push(e.key);
      }
    } else if (e.key === "Space") {
      searcher.push(" ");
    }

    if (e.key === "Escape") {
      searcher = [];
      searcherToString = "";
      e.target.value = "";
    } else {
      searcherToString = searcher.join("");
    }
    $element.preventDefault;
    searching(searcherToString, $section);
  });
  function searching(_search, _section) {
    let _searchToLowerCase = _search.toLowerCase();
    let searcher = new RegExp(`(${_search})`, "gi"),
      contentParagraph = [],
      contentFigcaption = [],
      i = 0,
      spanInt = /<span class="mark_search">/gi;
    let spanOut = /<\/span>/gi;
    for (let children of _section.children) {
      contentParagraph.push(children.children[0].children[1].textContent);
      contentFigcaption.push(
        children.children[0].children[0].children[1].textContent
      );
      //para el parrafo
      let paragraphWhitoutSpanInt = contentParagraph[i].replace(spanInt, ""),
        paragraphWhitoutSpan = paragraphWhitoutSpanInt.replace(spanOut, "");
      contentParagraph[i] = paragraphWhitoutSpan;
      contentParagraph[i] = contentParagraph[i].replace(/\s{2,}/, " ");
      //para el titulo
      let figcaptionWhitoutSpanInt = contentFigcaption[i].replace(spanInt, ""),
        figcaptionWhitoutSpan = figcaptionWhitoutSpanInt.replace(spanOut, "");
      contentFigcaption[i] = figcaptionWhitoutSpan;
      contentFigcaption[i] = contentFigcaption[i].replace(/\s{2,}/, " ");
      let paragraph = contentParagraph[i].split(searcher),
        tittle = contentFigcaption[i].split(searcher);
      if (
        contentParagraph[i].toLowerCase().includes(_searchToLowerCase) ||
        contentFigcaption[i].toLowerCase().includes(_searchToLowerCase)
      ) {
        let newParagraph = "",
          newTittle = "";
        for (let character of paragraph) {
          if (searcher.test(character)) {
            newParagraph += `<span class="mark_search">`;
            newParagraph += character;
            newParagraph += `</span>`;
          } else {
            newParagraph += character;
          }
        }
        for (let character of tittle) {
          if (searcher.test(character)) {
            newTittle += `<span class="mark_search">`;
            newTittle += character;
            newTittle += `</span>`;
          } else {
            newTittle += character;
          }
        }
        children.children[0].children[0].children[1].innerHTML = newTittle;
        children.children[0].children[1].innerHTML = newParagraph;
        if (_search === "") {
          children.children[0].children[0].children[1].innerHTML =
            figcaptionWhitoutSpan;
          contentFigcaption[i] = figcaptionWhitoutSpan;
          children.children[0].children[1].innerHTML = paragraphWhitoutSpan;
          contentParagraph[i] = paragraphWhitoutSpan;
        }
        children.classList.remove("noEncontrado");
      } else {
        children.classList.add("noEncontrado");
      }
      i++;
    }
  }
}
