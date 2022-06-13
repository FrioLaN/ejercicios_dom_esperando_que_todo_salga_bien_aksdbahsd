const d = document,
  $formulario = d.getElementById("shortcuts"),
  $escenaEsfera = d.getElementById("escenario"),
  $esfera = d.getElementById("esfera");
let caracter = {
    valorArriba: ["w"],
    valorAbajo: ["s"],
    valorDerecha: ["d"],
    valorIzquierda: ["a"],
  },
  caracteresValidos = [
    caracter.valorArriba[0],
    caracter.valorAbajo[0],
    caracter.valorDerecha[0],
    caracter.valorIzquierda[0],
  ],
  salir = 0,
  y = 0,
  x = 0,
  salvar = d.getElementById("salvarCaracteres"),
  cancelar = d.getElementById("cancelar");

export function alrtLtrs(e, $salvar, $cancelar) {
  $formulario.children[4].children[0].style.visibility = "hidden";
  let name = e.target.name;
  switch (name) {
    case "arriba":
      caracter.valorArriba.pop();
      caracter.valorArriba.push(e.key);
      validaAlerta(e, 0, $salvar, $cancelar, caracter.valorArriba);
      break;
    case "abajo":
      caracter.valorAbajo.pop();
      caracter.valorAbajo.push(e.key);
      validaAlerta(e, 1, $salvar, $cancelar, caracter.valorAbajo);
      break;
    case "derecha":
      caracter.valorDerecha.pop();
      caracter.valorDerecha.push(e.key);
      validaAlerta(e, 2, $salvar, $cancelar, caracter.valorDerecha);
      break;
    case "izquierda":
      caracter.valorIzquierda.pop();
      caracter.valorIzquierda.push(e.key);
      validaAlerta(e, 3, $salvar, $cancelar, caracter.valorIzquierda);
      break;
  }
}

function validaAlerta(e, hijo, $salvar, $cancelar, valor) {
  if (valor.length > 1 && valor !== "Backspace") {
    $formulario.children[hijo].children[0].children[0].style.visibility =
      "visible";
    desabiliSalv($salvar, $cancelar, hijo);
  } else if (valor.length === 0) {
    desabiliCancSalv($salvar, $cancelar, hijo);
  } else if (valor.length === 1) {
    labelCorrecto(false, hijo, e.key, e.target.name);
    $formulario.children[hijo].children[0].children[0].style.visibility =
      "hidden";
    habilitSalvCanc($salvar, $cancelar, hijo);
  }
}

function habilitSalvCanc($salvar, $cancelar, hijo) {
  $salvar.disabled = false;
  $cancelar.disabled = false;
  $cancelar.style.backgroundColor = "#f7df1e";
  $cancelar.style.color = "#222";
  $cancelar.style.cursor = "pointer";
  $salvar.style.backgroundColor = "#f7df1e";
  $salvar.style.color = "#222";
  $salvar.style.cursor = "pointer";
  $formulario.children[hijo].children[1].children[0].classList.add(
    "barra_uno--correcta"
  );
  $formulario.children[hijo].children[1].children[1].classList.add(
    "barra_dos--correcta"
  );
  $formulario.children[hijo].children[1].children[0].classList.remove(
    "barra_uno--incorrecta"
  );
  $formulario.children[hijo].children[1].children[1].classList.remove(
    "barra_dos--incorrecta"
  );
}

function desabiliCancSalv($salvar, $cancelar, hijo) {
  $salvar.disabled = true;
  $cancelar.disabled = true;
  $cancelar.style.backgroundColor = "#222";
  $cancelar.style.color = "#f7df1e";
  $cancelar.style.cursor = "not-allowed";
  $salvar.style.backgroundColor = "#222";
  $salvar.style.color = "#f7df1e";
  $salvar.style.cursor = "not-allowed";
  $formulario.children[hijo].children[1].children[0].classList.remove(
    "barra_uno--correcta"
  );
  $formulario.children[hijo].children[1].children[1].classList.remove(
    "barra_dos--correcta"
  );
  $formulario.children[hijo].children[1].children[0].classList.add(
    "barra_uno--incorrecta"
  );
  $formulario.children[hijo].children[1].children[1].classList.add(
    "barra_dos--incorrecta"
  );
}

function desabiliSalv($salvar, $cancelar, hijo) {
  $salvar.disabled = true;
  $cancelar.disabled = false;
  $cancelar.style.backgroundColor = "#f7df1e";
  $cancelar.style.color = "#222";
  $cancelar.style.cursor = "pointer";
  $salvar.style.backgroundColor = "#222";
  $salvar.style.color = "#f7df1e";
  $salvar.style.cursor = "not-allowed";
  $formulario.children[hijo].children[1].children[0].classList.remove(
    "barra_uno--correcta"
  );
  $formulario.children[hijo].children[1].children[1].classList.remove(
    "barra_dos--correcta"
  );
  $formulario.children[hijo].children[1].children[0].classList.add(
    "barra_uno--incorrecta"
  );
  $formulario.children[hijo].children[1].children[1].classList.add(
    "barra_dos--incorrecta"
  );
}

function eliminarAlertas($salvar, $cancelar) {
  $salvar.disabled = true;
  $cancelar.disabled = true;
  $cancelar.style.backgroundColor = "#222";
  $cancelar.style.color = "#f7df1e";
  $cancelar.style.cursor = "not-allowed";
  $salvar.style.backgroundColor = "#222";
  $salvar.style.color = "#f7df1e";
  $salvar.style.cursor = "not-allowed";
  for (let i = 0; i <= 3; i++) {
    $formulario.children[i].children[1].children[0].classList.remove(
      "barra_uno--correcta"
    );
    $formulario.children[i].children[1].children[1].classList.remove(
      "barra_dos--correcta"
    );
    $formulario.children[i].children[1].children[0].classList.remove(
      "barra_uno--incorrecta"
    );
    $formulario.children[i].children[1].children[1].classList.remove(
      "barra_dos--incorrecta"
    );
  }
}

function salvarCaractereS(vaArr, vaAbj, vaIzq, vaDer) {
  const caracteres = new Set([
      "arriba",
      vaArr,
      "abajo",
      vaAbj,
      "derecha",
      vaDer,
      "izquierda",
      vaIzq,
    ]),
    caracteresToArray = Array.from(caracteres);

  if (caracteres.size < 8) {
    if (caracteresToArray[1] !== caracter.valorArriba) {
      caracter.valorArriba = caracteresValidos[0];
    }
    if (caracteresToArray[3] !== caracter.valorAbajo) {
      caracter.valorAbajo = caracteresValidos[1];
    }
    if (caracteresToArray[5] !== caracter.valorDerecha) {
      caracter.valorDerecha = caracteresValidos[2];
    }
    if (caracteresToArray[7] !== caracter.valorIzquierda) {
      caracter.valorIzquierda = caracteresValidos[3];
    }
    $formulario.children[4].children[0].style.visibility = "visible";
  } else {
    caracteresValidos = [vaArr, vaAbj, vaDer, vaIzq];
    eliminarAlertas(salvar, cancelar);
    for (let i = 0; i <= 3; i++) {
      $formulario.children[i].children[0].children[0].style.visibility =
        "hidden";
      $formulario.children[i].children[1].children[3].placeholder =
        caracteresValidos[i];
    }
    $formulario.children[4].children[0].style.visibility = "hidden";
  }
}
salvar.addEventListener("click", () => {
  salvarCaractereS(
    caracter.valorArriba[0],
    caracter.valorAbajo[0],
    caracter.valorIzquierda[0],
    caracter.valorDerecha[0]
  );
  labelCorrecto();
  $formulario.reset();
});

cancelar.addEventListener("click", () => {
  labelCorrecto();
  $formulario.reset();
  eliminarAlertas(salvar, cancelar);
  $formulario.children[4].children[0].style.visibility = "hidden";
  for (let i = 0; i <= 3; i++) {
    $formulario.children[i].children[0].children[0].style.visibility = "hidden";
  }
  caracter = {
    valorArriba: [caracteresValidos[0]],
    valorAbajo: [caracteresValidos[1]],
    valorDerecha: [caracteresValidos[2]],
    valorIzquierda: [caracteresValidos[3]],
  };
  console.log("limpio!");
});

$escenaEsfera.addEventListener("click", (e) => {
  if (salir === 0) {
    $escenaEsfera.children[0].style.visibility = "hidden";
    d.addEventListener("keydown", (ev) => {
      teclaPresionada(ev);
    });
    salir = 1;
  } else if (salir === 1) {
    $escenaEsfera.children[0].textContent = `Para jugar: si presionas una
            vez a la
            letra que esta asignada para subir, bajar, ir a la derecha o izquierda, este se movera al lado que este
            indicado`;
    $escenaEsfera.children[0].style.visibility = "visible";
    salir = 0;
  }
});

function teclaPresionada(e) {
  let limiteEscena = $escenaEsfera.getBoundingClientRect(),
    limiteEsfera = $esfera.getBoundingClientRect();
  let tecla = e.key;
  switch (tecla) {
    case caracteresValidos[0]:
      if (limiteEsfera.top > limiteEscena.top) y--;
      break;
    case caracteresValidos[1]:
      if (limiteEsfera.bottom < limiteEscena.bottom) y++;
      break;
    case caracteresValidos[2]:
      if (limiteEsfera.right < limiteEscena.right) x++;
      break;
    case caracteresValidos[3]:
      if (limiteEsfera.left > limiteEscena.left) x--;
      break;
  }
  $esfera.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

function labelCorrecto(aux = true, hijo, key, ocupacionLabelEnviada) {
  const ocupacionLabel = ["arriba", "abajo", "derecha", "izquierda"];
  if (aux) {
    for (let i = 0; i < 4; i++) {
      $formulario.children[
        i
      ].children[1].children[2].textContent = `BOTON "${ocupacionLabel[i]}" = ${caracteresValidos[i]}`;
    }
  } else if (!aux) {
    $formulario.children[
      hijo
    ].children[1].children[2].textContent = `BOTON "${ocupacionLabelEnviada}" = ${key}`;
  }
}
