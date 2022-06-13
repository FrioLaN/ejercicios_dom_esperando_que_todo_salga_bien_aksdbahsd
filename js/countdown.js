const d = document,
  $barra_progreso = d.getElementById("progress_bar");

let tiempoTranscurrido, porcentajeTranscurrido;
export function countdown(visibleCount) {
  let dia;
  devuelveTiempo(visibleCount);
  tiempoTranscurrido = setInterval(() => {
    dia = devuelveTiempo(visibleCount);
  }, 1000);
  porcentajeTranscurrido = setInterval(() => {
    devuelvePorcentaje(dia);
  }, 1000);
}

function paddedFormat(num) {
  return num < 10 ? "0" + num : num;
}

function devuelveTiempo(elemento) {
  let hoy = new Date(),
    navidad = new Date(`${hoy.getFullYear()} / 12 / 25 00:00 AM`),
    duracion = navidad - hoy,
    tiempoRestanteSegundosMS = 1000,
    tiempoRestanteMinutosMS = tiempoRestanteSegundosMS * 60,
    tiempoRestanteHorasMS = tiempoRestanteMinutosMS * 60,
    tiempoRestanteDiasMS = tiempoRestanteHorasMS * 24;

  let tiempoRestanteDias = Math.floor(duracion / tiempoRestanteDiasMS),
    tiempoRestanteHora = Math.floor(
      (duracion % tiempoRestanteDiasMS) / tiempoRestanteHorasMS
    ),
    tiempoRestanteMinutos = Math.floor(
      (duracion % tiempoRestanteHorasMS) / tiempoRestanteMinutosMS
    ),
    tiempoRestanteSegundos = Math.floor(
      (duracion % tiempoRestanteMinutosMS) / tiempoRestanteSegundosMS
    );
  elemento.textContent = `Hasta Navidad falta: ${paddedFormat(
    tiempoRestanteDias
  )} dias , ${paddedFormat(tiempoRestanteHora)} horas , ${paddedFormat(
    tiempoRestanteMinutos
  )} minutos , ${paddedFormat(tiempoRestanteSegundos)} segundos`;
  if (duracion < 1) {
    clearInterval(tiempoTranscurrido);
    const $alarmaSonora = document.createElement("audio");
    $alarmaSonora.src = "./assets/feliz_navidad.mp3";
    $alarmaSonora.play();
    elemento.textContent = "al fin la jodida NAviDaadD";
  }
  return tiempoRestanteDias;
}

function devuelvePorcentaje(dias) {
  let t = 359,
    c = t - dias,
    r = Math.floor((c / t) * 100);
  $barra_progreso.style.width = `${r}%`;
  if (r >= 100) {
    clearInterval(porcentajeTranscurrido);
    $barra_progreso.style.backgroundColor = "green";
    $barra_progreso.style.color = "red";
    $barra_progreso.textContent = "feliz Navidad!";
  } else if (r <= 99 && r >= 0) {
    $barra_progreso.style.backgroundColor = "#f7df1e";
    $barra_progreso.style.color = "none";
    $barra_progreso.textContent = `${r}%`;
  }
}
