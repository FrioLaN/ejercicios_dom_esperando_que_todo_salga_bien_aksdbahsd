const $boton = document.querySelector("#boton_activador"),
  $lineaUnoBotonActivador = document.querySelector(".line_boton_activador1"),
  $lineaDosBotonActivador = document.querySelector(".line_boton_activador2"),
  $lineaTresBotonActivador = document.querySelector(".line_boton_activador3"),
  $menu_desplegable = document.querySelector("#menu");
let contador = 0;

$boton.addEventListener("click", animationButton);

function animationButton() {
  $lineaUnoBotonActivador.classList.toggle("activeline_boton_activador1");
  $lineaDosBotonActivador.classList.toggle("activeline_boton_activador2");
  $lineaTresBotonActivador.classList.toggle("activeline_boton_activador3");
  if (contador === 0) {
    if (!$menu_desplegable.classList.contains("#")) {
      $menu_desplegable.classList.replace("ultimo", "#");
    }
    $boton.style.backgroundColor = "#222";
    $lineaUnoBotonActivador.style.backgroundColor = "#f7df1e";
    $lineaDosBotonActivador.style.backgroundColor = "#f7df1e";
    $lineaTresBotonActivador.style.backgroundColor = "#f7df1e";
    $menu_desplegable.style.opacity = 1;
    $menu_desplegable.style.zIndex = 2;
    $menu_desplegable.style.visibility = "visible";
    $menu_desplegable.classList.replace("#", "primero");
    contador = 1;
  } else if (contador === 1) {
    $boton.style.backgroundColor = "#f7df1e";
    $lineaUnoBotonActivador.style.backgroundColor = "#222";
    $lineaDosBotonActivador.style.backgroundColor = "#222";
    $lineaTresBotonActivador.style.backgroundColor = "#222";
    $menu_desplegable.style.opacity = 0;
    $menu_desplegable.style.zIndex = -1;
    $menu_desplegable.style.visibility = "hidden";
    $menu_desplegable.classList.replace("primero", "ultimo");
    contador = 0;
  }
}
