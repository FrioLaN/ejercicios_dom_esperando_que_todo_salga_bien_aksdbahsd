"use strict";

const d = document,
  $botonActivadorReloj = d.getElementById("Activar"),
  $botonDetenerReloj = d.getElementById("Detener"),
  $AniadirAlarma = d.getElementById("SalvarAlarma"),
  $removerAlarma = d.getElementById("AlarmaRemover"),
  $contenedorAlarma = d.getElementById("alarma_caja"),
  $reloj_digital = d.getElementById("dentroDeReloj"),
  $tiempo = $contenedorAlarma.children[1],
  $salvar = $contenedorAlarma.children[2];

$botonDetenerReloj.disabled = true;
$botonDetenerReloj.style.cursor = "not-allowed";
$botonDetenerReloj.style.backgroundColor = "#f7df1e";
$botonDetenerReloj.style.color = "#222";

$removerAlarma.disabled = true;
$removerAlarma.style.backgroundColor = "#f7df1e";
$removerAlarma.style.color = "#222";
$removerAlarma.style.cursor = "not-allowed";

let tiempo, detenerAlarma;

function iniciarReloj() {
  let hoy = new Date().toLocaleTimeString();
  $reloj_digital.textContent = `${hoy}`;

  $botonActivadorReloj.disabled = true;
  $botonActivadorReloj.style.cursor = "not-allowed";
  $botonActivadorReloj.style.backgroundColor = "#f7df1e";
  $botonActivadorReloj.style.color = "#222";
  $botonDetenerReloj.addEventListener("mouseover", hoverDetener);
  $botonDetenerReloj.addEventListener("mouseout", outDetener);

  $botonDetenerReloj.disabled = false;
  $botonDetenerReloj.style.backgroundColor = "#222";
  $botonDetenerReloj.style.color = "#f7df1e";
  $botonDetenerReloj.style.cursor = "pointer";

  tiempo = setInterval(() => {
    let hoy = new Date().toLocaleTimeString();
    $reloj_digital.textContent = `${hoy}`;
  }, 1000);
}

function comprobadorAlarma(h, m, aux = 1) {
  if (aux === 1) {
    let alarma = {
      hora: h,
      minuto: m,
    };
    detenerAlarma = setInterval(() => {
      let hoy = new Date();
      const hora_actual = {
        hora: hoy.getHours(),
        minuto: hoy.getMinutes(),
      };
      if (
        hora_actual.hora === alarma.hora &&
        hora_actual.minuto === alarma.minuto
      ) {
        const $alarmaSonora = document.createElement("audio");
        $alarmaSonora.src = "./assets/videoplayback(1).mp3";
        $alarmaSonora.play();
        detenerALarma();
      }
    }, 1000);
  }
}

function detenerALarma() {
  clearInterval(detenerAlarma);
}

function aniadirAlarma(e, aux = 1) {
  const $alarma = document.getElementById("Alarma").value;
  if ($alarma === "00:00") {
    alert("tienes que ingresar una alarma");
  } else {
    $removerAlarma.disabled = false;
    $removerAlarma.style.cursor = "pointer";
    $removerAlarma.style.backgroundColor = "#222";
    $removerAlarma.style.color = "#f7df1e";
    $removerAlarma.addEventListener("mouseover", hoverRemover);
    $removerAlarma.addEventListener("mouseout", outRemover);
    $contenedorAlarma.children[1].style.cursor = "not-allowed";
    $contenedorAlarma.children[2].style.cursor = "not-allowed";
    $contenedorAlarma.children[1].disabled = true;
    $contenedorAlarma.children[2].disabled = true;
    $contenedorAlarma.children[1].style.backgroundColor = "#f7df1e";
    $contenedorAlarma.children[1].style.color = "#222";
    $contenedorAlarma.children[2].style.backgroundColor = "#f7df1e";
    $contenedorAlarma.children[2].style.color = "#222";
    let horA = $alarma.charAt(0) + $alarma.charAt(1);
    let minutO = $alarma.charAt(3) + $alarma.charAt(4);
    let hora = Number(horA);
    let minuto = Number(minutO);
    if (hora >= 12) {
      $contenedorAlarma.children[0].textContent = `Alarma para el dia de hoy a las : ${$alarma} p.m.`;
    } else {
      $contenedorAlarma.children[0].textContent = `Alarma para el dia de hoy a las : ${$alarma} a.m.`;
    }
    if (aux === 1) {
      comprobadorAlarma(hora, minuto);
    } else {
      comprobadorAlarma(hora, minuto, 0);
    }
  }
}

function hoverRemover() {
  $removerAlarma.style.backgroundColor = "#f7df1e";
  $removerAlarma.style.color = "#222";
}

function outRemover() {
  $removerAlarma.style.backgroundColor = "#222";
  $removerAlarma.style.color = "#f7df1e";
}

function hoverActivar() {
  $botonActivadorReloj.style.backgroundColor = "#f7df1e";
  $botonActivadorReloj.style.color = "#222";
}

function outActivar() {
  $botonActivadorReloj.style.backgroundColor = "#222";
  $botonActivadorReloj.style.color = "#f7df1e";
}

function hoverDetener() {
  $botonDetenerReloj.style.backgroundColor = "#f7df1e";
  $botonDetenerReloj.style.color = "#222";
}

function outDetener() {
  $botonDetenerReloj.style.backgroundColor = "#222";
  $botonDetenerReloj.style.color = "#f7df1e";
}

function hoverTime() {
  $contenedorAlarma.children[1].style.backgroundColor = "#f7df1e";
  $contenedorAlarma.children[1].style.color = "#222";
}

function outTime() {
  $contenedorAlarma.children[1].style.backgroundColor = "#222";
  $contenedorAlarma.children[1].style.color = "#f7df1e";
}

function hoverSave() {
  $contenedorAlarma.children[2].style.backgroundColor = "#f7df1e";
  $contenedorAlarma.children[2].style.color = "#222";
}

function outSave() {
  $contenedorAlarma.children[2].style.backgroundColor = "#222";
  $contenedorAlarma.children[2].style.color = "#f7df1e";
}

function removerAlarma() {
  detenerALarma();
  $removerAlarma.disabled = true;
  $removerAlarma.style.cursor = "not-allowed";
  $removerAlarma.style.backgroundColor = "#f7df1e";
  $removerAlarma.style.color = "#222";
  $contenedorAlarma.children[0].textContent = `Alarma para el dia de hoy a las : (no definida)`;
  $contenedorAlarma.children[1].disabled = false;
  $contenedorAlarma.children[2].disabled = false;
  $contenedorAlarma.children[1].style.cursor = "pointer";
  $contenedorAlarma.children[2].style.cursor = "pointer";
  $contenedorAlarma.children[1].style.backgroundColor = "#222";
  $contenedorAlarma.children[1].style.color = "#f7df1e";
  $contenedorAlarma.children[2].style.backgroundColor = "#222";
  $contenedorAlarma.children[2].style.color = "#f7df1e";

  $tiempo.addEventListener("mouseover", hoverTime);
  $tiempo.addEventListener("mouseout", outTime);
  $salvar.addEventListener("mouseover", hoverSave);
  $salvar.addEventListener("mouseout", outSave);
}

$botonActivadorReloj.addEventListener("click", iniciarReloj);
$botonDetenerReloj.addEventListener("click", () => {
  clearInterval(tiempo);
  $botonActivadorReloj.disabled = false;
  $botonActivadorReloj.style.backgroundColor = "#222";
  $botonActivadorReloj.style.color = "#f7df1e";
  $botonActivadorReloj.style.cursor = "pointer";
  $botonActivadorReloj.addEventListener("mouseover", hoverActivar);
  $botonActivadorReloj.addEventListener("mouseout", outActivar);

  $botonDetenerReloj.disabled = true;
  $botonDetenerReloj.style.backgroundColor = "#f7df1e";
  $botonDetenerReloj.style.color = "#222";
  $botonDetenerReloj.style.cursor = "not-allowed";
});
$AniadirAlarma.addEventListener("click", aniadirAlarma);
$removerAlarma.addEventListener("click", removerAlarma);
