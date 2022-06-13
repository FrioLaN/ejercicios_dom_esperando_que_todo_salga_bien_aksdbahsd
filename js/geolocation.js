const n = navigator,
  d = document,
  s = window.localStorage;

export default function getGeolocation(elementID) {
  let element = d.getElementById(elementID);
  function succes(lati, longi, presi) {
    element.innerHTML = `
    <p>latitud = ${lati}</p>
    <p>longitud = ${longi}</p>
    <p>presicion = ${presi} metro (s)</p>
    <p>
    <a target="_blank" rel="noopener" href="https://www.google.com/maps/@${lati},${longi},18z">Ver en Google Maps</a>
    </p>
    `;
  }

  function error(e) {
    if (s.mobile === "null") {
      if (e.code === 1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Para acceder a esta caracteristica, tienes que concederme los permisos necesarios!",
        });
      }
      if (e.code === 2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sucedio un error inesperado, intenta de nuevo",
        });
      }
      if (e.code === 3) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El tiempo de espera se agoto... Intenta de nuevo mas tarde.",
        });
      }
    } else {
      element.innerHTML = `
      <p>Sucecio un error inesperado!.</p>
      <p><mark>Asegurate de tener encendido el GPS de tu dispositivo y haber dado los permisos para acceder a tu ubicacion.</mark></p>
      `;
    }
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      succes(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.accuracy,
        position
      );
    },
    (err) => {
      error(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
    }
  );
}
