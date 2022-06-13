let aux = 0,
  storage = window.localStorage,
  estado = storage.getItem("estado") || "sunny",
  icon;
const d = document,
  $botonActivadorReloj = d.getElementById("Activar"),
  $botonDetenerReloj = d.getElementById("Detener"),
  $AniadirAlarma = d.getElementById("SalvarAlarma"),
  $removerAlarma = d.getElementById("AlarmaRemover"),
  $contenedorAlarma = d.getElementById("alarma_caja"),
  $tiempo = $contenedorAlarma.children[1],
  $botones = [
    $botonActivadorReloj,
    $botonDetenerReloj,
    $AniadirAlarma,
    $removerAlarma,
    $tiempo,
  ],
  $botonesExcpt = [$AniadirAlarma, $removerAlarma, $tiempo];

export function darkModeBtn(btn, carga = 0) {
  let $selectoresD = d.querySelectorAll("[d-mode]");
  if (carga === 0 && estado === "moon") {
    storage.setItem("icon", "moon");
    icon = storage.getItem("icon");
    btn.removeAttribute("name");
    btn.setAttribute("name", icon);
    storage.setItem("estado", "sunny");
    estado = storage.getItem("estado");
    aux = 1;
  } else if (carga === 0 && estado === "sunny") {
    storage.setItem("icon", "sunny");
    icon = storage.getItem("icon");
    btn.removeAttribute("name");
    btn.setAttribute("name", icon);
    storage.setItem("estado", "moon");
    estado = storage.getItem("estado");
    aux = 0;
  }
  if (estado === "moon") {
    btns(aux);
    $selectoresD.forEach((element) => {
      if (element.classList.contains("excpt")) {
        element.classList.add("DarkModeExcpt");
        btns(aux, false);
      } else {
        element.classList.add("DarkMode");
      }
    });
    storage.setItem("icon", "sunny");
    icon = storage.getItem("icon");
    btn.removeAttribute("name");
    btn.setAttribute("name", icon);
  } else if (estado === "sunny") {
    $selectoresD.forEach((element) => {
      if (element.classList.contains("excpt")) {
        element.classList.remove("DarkModeExcpt");
        btns(aux, false);
      } else {
        element.classList.remove("DarkMode");
      }
    });
    storage.setItem("icon", "moon");
    icon = storage.getItem("icon");
    btn.removeAttribute("name");
    btn.setAttribute("name", icon);
  }
}

export function darkStorage(btn) {
  darkModeBtn(btn, 1);
}

function btns(a, exc = true) {
  if (exc) {
    if (a === 0) {
      for (let i = 0; i < $botones.length; i++) {
        $botones[i].style.border = "1px solid #f7df1e";
      }
    } else if (a === 1) {
      for (let i = 0; i < $botones.length; i++) {
        $botones[i].style.border = "1px solid #222";
      }
    }
  } else if (!exc) {
    for (let i = 0; i < $botonesExcpt.length; i++) {
      $botonesExcpt[i].style.border = "1px solid #222";
    }
  }
}
