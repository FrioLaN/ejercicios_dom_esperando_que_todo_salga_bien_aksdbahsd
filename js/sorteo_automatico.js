const d = document,
  n = navigator;
export default function (
  input,
  form,
  participantesCont,
  conseguirGanador,
  ganador,
  ganadorTittle
) {
  let $form = d.getElementById(form),
    $participantes = d.getElementById(participantesCont),
    $getWiner = d.getElementById(conseguirGanador);

  let participantes = [],
    participantesToString;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      let $input = d.getElementById(input);
      if ($input.value === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tienes que ingresar un nombre",
        });
      } else {
        participantes.push($input.value);
        participantesToString = participantes.join(", ");
        participantesToString += ".";
        $participantes.textContent = participantesToString;

        $getWiner.addEventListener("click", () => {
          let $ganador = d.getElementById(ganador),
            $ganadorTittle = d.getElementById(ganadorTittle);

          if (participantes.length <= 1) {
            $ganadorTittle.textContent = "No hay suficientes participantes";
          } else {
            let i = 0,
              aux = 0;
            let winner,
              num = Math.round(Math.random() * participantes.length - 1);
            winner = participantes[num];
            $ganador.textContent = "";
            let espera = setInterval(() => {
              if (i === 0) {
                $ganadorTittle.textContent = "El ganador es.";
                i = 1;
              } else if (i === 1) {
                $ganadorTittle.textContent = "El ganador es..";
                i = 2;
              } else if (i === 2) {
                $ganadorTittle.textContent = "El ganador es...";
                i = 0;
                aux++;
              }
              if (aux === 3) {
                clearInterval(espera);
                $ganadorTittle.textContent = "El ganador es:";
                $ganador.textContent = winner + " con el numero " + num;
              }
            }, 500);
          }
        });
      }
      d.preventDefault;
      $form.reset();
    }
  });
}
