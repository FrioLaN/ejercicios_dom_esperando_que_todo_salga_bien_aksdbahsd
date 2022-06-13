const w = window;

export function networkStatus() {
  w.addEventListener("offline", (e) => {
    Swal.fire({
      icon: "error",
      title: "Ooops...",
      text: "estas sin conexion a internet",
    });
  });
  w.addEventListener("online", (e) => {
    Swal.fire({
      icon: "success",
      title: "Yaas",
      text: "Conectado nuevamente!",
    });
  });
}
