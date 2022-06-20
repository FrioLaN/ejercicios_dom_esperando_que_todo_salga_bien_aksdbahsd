const d = document;

export default function validForm() {
  const $form = d.getElementById("formFromInfo");
  const $inputs = d.querySelectorAll("#formFromInfo [data-form-contact]");
  const $submit = d.querySelector(
    "#formFromInfo input[data-form-contact-sent]"
  );
  let inputs = {
    name: false,
    mail: false,
    issue: false,
    message: false,
  };
  $submit.disabled = true;
  $submit.classList.add("disabled-sent");
  function valid(e) {
    let $element = e.target;
    let valueElement = $element.value;
    const WITHOUTNUMBER = /[0-9]/gi;
    if ($element.classList.contains("--name")) {
      //validando los numeros -- inicio
      let $capErrorName = d.querySelector(
        "#formFromInfo p[data-errorInfo-name]"
      );

      $capErrorName = d.querySelector("#formFromInfo p[data-errorInfo-name]");
      if (WITHOUTNUMBER.test(valueElement)) {
        try {
          $capErrorName.remove();
        } catch (err) {}
        inputs.name = false;

        let $newErrorName = d.createElement("p");
        $newErrorName.textContent = "No puedes ingresar numeros";
        $newErrorName.classList.add("errorFormInfo");
        $newErrorName.setAttribute(
          "data-errorInfo-name",
          "data-errorInfo-name"
        );
        $element.insertAdjacentElement("afterend", $newErrorName);
      } else if (WITHOUTNUMBER.test === false) {
        inputs.name = true;
        try {
          $capErrorName.remove();
        } catch (err) {}
      } else if (valueElement.length < 3 || valueElement.length > 15) {
        //validando los numeros -- fin
        //validando la longitud
        try {
          $capErrorName.remove();
        } catch (err) {}
        inputs.name = false;
        let $newErrorName = d.createElement("p");
        $newErrorName.textContent =
          "El nombre no puede medir menos de 3 letras o ser superior a 15 letras";
        $newErrorName.classList.add("errorFormInfo");
        $newErrorName.setAttribute(
          "data-errorInfo-name",
          "data-errorInfo-name"
        );
        $element.insertAdjacentElement("afterend", $newErrorName);
      } else {
        inputs.name = true;
        try {
          $capErrorName.remove();
        } catch (err) {}
      }
    } else if ($element.classList.contains("--email")) {
      //validando el email INICIO
      let $capErrorMail = d.querySelector(
        "#formFromInfo p[data-errorInfo-mail]"
      );
      const validaMail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!validaMail.test(valueElement)) {
        inputs.mail = false;
        try {
          $capErrorMail.remove();
        } catch (err) {}
        let $newErrorMail = d.createElement("p");
        $newErrorMail.textContent =
          "Asegurate de que estes ingresando un correo correcto";
        $newErrorMail.classList.add("errorFormInfo");
        $newErrorMail.setAttribute(
          "data-errorInfo-mail",
          "data-errorInfo-mail"
        );
        $element.insertAdjacentElement("afterend", $newErrorMail);
      } else {
        inputs.mail = true;
        try {
          $capErrorMail.remove();
        } catch (err) {}
      }
      //validando el email FIN
    } else if ($element.classList.contains("--issue")) {
      let $capErrorIssue = d.querySelector(
        "#formFromInfo p[data-errorInfo-issue]"
      );
      $capErrorIssue = d.querySelector("#formFromInfo p[data-errorInfo-name]");
      if (valueElement.length > 30 || valueElement.length < 5) {
        try {
          $capErrorIssue.remove();
        } catch (err) {}
        inputs.issue = false;

        let $newErrorIssue = d.createElement("p");
        $newErrorIssue.textContent =
          "No puedes mas de 30 caracteres, ni ser menor a 5 caracteres";
        $newErrorIssue.classList.add("errorFormInfo");
        $newErrorIssue.setAttribute(
          "data-errorInfo-name",
          "data-errorInfo-name"
        );
        $element.insertAdjacentElement("afterend", $newErrorIssue);
      } else {
        inputs.issue = true;

        try {
          $capErrorIssue.remove();
        } catch (err) {}
      }
    } else if ($element.classList.contains("--message")) {
      let $capErrorMessage = d.querySelector(
        "#formFromInfo p[data-errorInfo-message]"
      );
      if (valueElement.length < 10 || valueElement.length > 300) {
        try {
          $capErrorMessage.remove();
        } catch (err) {}
        inputs.message = false;

        let $newErrorMessage = d.createElement("p");
        $newErrorMessage.textContent =
          "El mensaje no puede medir menos de 10 caracteres o ser superior a 300 caracteres";
        $newErrorMessage.classList.add("errorFormInfo");
        $newErrorMessage.setAttribute(
          "data-errorInfo-message",
          "data-errorInfo-message"
        );
        $element.insertAdjacentElement("afterend", $newErrorMessage);
      } else {
        inputs.message = true;

        try {
          $capErrorMessage.remove();
        } catch (err) {}
      }
    }

    if (inputs.name && inputs.mail && inputs.issue && inputs.message) {
      $submit.disabled = false;
      $submit.classList.remove("disabled-sent");
    } else {
      $submit.disabled = true;
      $submit.classList.add("disabled-sent");
    }
  }
  $inputs.forEach((e) => e.addEventListener("keyup", valid));

  $submit.addEventListener("click", (e) => {
    console.log("se envio");
    $form.reset();
    inputs = {
      name: false,
      mail: false,
      issue: false,
      message: false,
    };
    e.preventDefault();
    $submit.disabled = true;
    $submit.classList.add("disabled-sent");
  });
}

function nameError() {}
