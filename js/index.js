import { alrtLtrs } from "./alertas.js";
import { countdown } from "./countdown.js";
import { scrollTop } from "./scroll-top-button.js";
import { darkModeBtn } from "./dark-mode-btn.js";
import { darkStorage } from "./dark-mode-btn.js";
import { responsive } from "./responsive.js";
import { fFromRespSubmit } from "./form_from_responsive.js";
import { fFromRespClose } from "./form_from_responsive.js";
import { navegadorCarac } from "./navegador.js";
import { networkStatus } from "./onLine_offLine.js";
import { webCamAccess } from "./access_web_cam.js";
import { webCam } from "./webcam_media.js";
import mouseIntoWebCam from "./mouse_over_out_webCam.js";
import getGeolocation from "./geolocation.js";
import getSearch from "./search_result.js";
import sorteo from "./sorteo_automatico.js";

const d = document,
  w = window,
  $inputArriba = document.getElementById("shortcut_arriba"),
  $inputAbajo = d.getElementById("shortcut_abajo"),
  $inputDerecha = d.getElementById("shortcut_derecha"),
  $inputIzquierda = d.getElementById("shortcut_izquierda"),
  inputs = [$inputArriba, $inputAbajo, $inputDerecha, $inputIzquierda],
  $salvar = d.getElementById("salvarCaracteres"),
  $cancelar = d.getElementById("cancelar"),
  $countDOWN = d.getElementById("countdown"),
  $botonScrollTop = d.getElementById("scroll-top__button"),
  $darkModeBtn = document.getElementById("dark-mode--container"),
  $iconDark = d.getElementById("iconDark"),
  $formResponsive = d.getElementById("formResponsive"),
  $cerrarResponsive = d.getElementById("cerrarURL"),
  $accessMedia = d.getElementById("access-webCam"),
  $controlsWebcam = d.getElementById("webCam_Controls"),
  $infoCam = d.getElementById("infoCam"),
  $formFromGeo = d.getElementById("formGeolocalitation");

let storage = window.localStorage;

d.addEventListener("DOMContentLoaded", (e) => {
  responsive(
    "(min-width: 500px)",
    `youtubeMedia`,
    `<p><a target="blank" href="https://youtu.be/JA9HUcsdKkA">ver en youtube</a></p>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/JA9HUcsdKkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsive(
    "(min-width: 500px)",
    `gmapMedia`,
    `<p><a target="blank" href="https://goo.gl/maps/T8yhtUympPjDZPiw6">ver en map</a></p>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063795.3953452292!2d23.811213872264343!3d58.616964090433584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c82a04bfd%3A0x40ea9fba4fb425c3!2sEstonia!5e0!3m2!1ses!2sec!4v1653429130608!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  $salvar.disabled = true;
  $cancelar.disabled = true;
  countdown($countDOWN);
  inputs.forEach((e) => {
    e.addEventListener("keydown", (e) => {
      alrtLtrs(e, $salvar, $cancelar);
    });
  });
  scrollTop($botonScrollTop);
  d.addEventListener("scroll", (e) => {
    scrollTop($botonScrollTop);
  });
  darkStorage($iconDark);
  $darkModeBtn.addEventListener("click", (e) => {
    darkModeBtn($iconDark);
  });
  $formResponsive.addEventListener("submit", (e) => {
    e.preventDefault;
    fFromRespSubmit(
      $formResponsive.children[0].value,
      $formResponsive.children[1].value,
      $formResponsive.children[2].value
    );
    return false;
  });
  $cerrarResponsive.addEventListener("click", (e) => {
    fFromRespClose();
  });
  navegadorCarac("info-browser");

  $infoCam.addEventListener("click", (e) => {
    Swal.fire({
      title: "haz lo siguiente:",
      text: "administrar/elige la camara a usar y recarga la pagina. Si no te funciona comprueba que la camara funcione correctamente y/o este bien conectada",
      imageUrl: "./assets/infoCam.jpeg",
      imageWidth: 350,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  });
  mouseIntoWebCam($controlsWebcam, d.getElementById("webCam_video"));
  if (
    storage.camera === "denied" ||
    storage.audio === "denied" ||
    storage.camera === undefined ||
    storage.audio === undefined
  ) {
    console.log("entre");
    $accessMedia.addEventListener("click", (e) => {
      webCamAccess();
    });
  } else {
    $accessMedia.remove($accessMedia);
    $controlsWebcam.children[0].addEventListener("click", (e) => {
      webCam({
        audio: d.getElementById("webCam_audio"),
        video: d.getElementById("webCam_video"),
        cameraDown: true,
        btns: $controlsWebcam,
      });
    });
    $controlsWebcam.children[1].addEventListener("click", (e) => {
      webCam({
        audio: d.getElementById("webCam_audio"),
        video: d.getElementById("webCam_video"),
        audioDown: true,
        btns: $controlsWebcam,
      });
    });
  }
  $formFromGeo.addEventListener("submit", () => {
    getGeolocation("geolocation");
  });

  getSearch("search_text", "cards--containner_main");
  sorteo(
    "nuevo_participante",
    "sorteo",
    "participantes",
    "getWiner",
    "ganador",
    "ganadorTittle"
  );
});
networkStatus();
