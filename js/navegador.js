const d = document,
  storage = window.localStorage;

let mobile = storage.getItem("mobile", "false");

export function navegadorCarac(cont) {
  let container = d.getElementById(cont),
    usAg = navigator.userAgentData,
    ua = navigator.userAgent,
    brwsName;
  container.children[0].textContent = `User Agent: ${navigator.userAgent}`;
  const isMobile = {
    apple: ua.match(/iPhone|iPad|iPod/),
    android: ua.match(/Android/),
    wPhone: ua.match(/Windows phone/),
    any: function () {
      return this.apple || this.android || this.wPhone;
    },
  };
  try {
    (brwsName = usAg.brands[2].brand), (SO = usAg.platform);
    container.children[1].children[0].textContent = `Navegador = ${brwsName}`;
    container.children[1].children[1].textContent = `SO = ${SO}`;
  } catch (error) {
    container.children[1].children[0].textContent = `Navegador = Esta funcion no esta disponile para este navegador o SO, por favor usa otro.`;
    container.children[1].children[1].textContent = `SO = ${
      isMobile.apple
        ? "IOS"
        : "Esta funcion no esta disponile para este navegador o SO, por favor usa otro."
    }`;
  }
  if (brwsName === "Google Chrome") {
    let exclusivoGC = d.createElement("p");
    exclusivoGC.textContent = "Este es un mensaje exclusivo de Google Chrome";
    exclusivoGC.classList.add("exclusiveMesage");
    container.insertAdjacentElement("beforeend", exclusivoGC);
  }
  if (brwsName === "Opera GX") {
    let exclusivoOG = d.createElement("p");
    exclusivoOG.textContent = "Este es un mensaje exclusivo de Opera GX";
    exclusivoOG.classList.add("exclusiveMesage");
    container.insertAdjacentElement("beforeend", exclusivoOG);
  }
  if (!isMobile.any()) {
    let exclusivoDT = d.createElement("p");
    exclusivoDT.textContent = "Este es un mensaje exclusivo de Desktop";
    exclusivoDT.classList.add("exclusiveMesage");
    container.insertAdjacentElement("beforeend", exclusivoDT);
  }
  storage.setItem("mobile", isMobile.any());
}
