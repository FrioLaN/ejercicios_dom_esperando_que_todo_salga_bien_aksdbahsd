const d = document;
let ventana;
export function fFromRespSubmit(link, width, heigth) {
  try {
    let altoAncho = `width=${width},height=${heigth}`;
    ventana = open(link, `abriendo: ${link}`, altoAncho);
    console.log(ventana);
  } catch (error) {
    swal(
      "Oops!",
      "no ingresaste un numero o la url esta mal escrita, debes ingresar los datos correctamente",
      "error"
    );
  }
}
export function fFromRespClose() {
  ventana.close();
}
