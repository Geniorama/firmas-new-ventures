const form = document.getElementById("form-nvc");

new ClipboardJS('#btn-copy');

if (form) {
  const inputs = document.querySelectorAll('input:not([type*="submit"])');
  const tel = document.getElementById("intl-phone");

  const iti = window.intlTelInput(tel, {
    // any initialisation options go here
    utilsScript: "./libs/intl-tel-input/js/utils.js",
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return "Ej: " + selectedCountryPlaceholder;
    },
    initialCountry: "mx",
  });

  function getPhoneNumber() {
    var phoneNumber = iti.getNumber(); // Obtiene el número de teléfono completo
    var countryData = iti.getSelectedCountryData(); // Obtiene los datos del país seleccionado
    var countryCode = countryData.dialCode; // Obtiene el código de país
    return {
      phoneNumber,
      countryData,
      countryCode,
    };
  }

  tel.addEventListener("countrychange", function () {
    let phone = getPhoneNumber();
    document.querySelector("#text-telefono .country-code").innerText =
      "+" + phone.countryCode;
  });

  inputs.forEach((el) => {
    const target = el.dataset.target;

    if (target) {
      el.addEventListener("input", function () {
        const text = document.querySelector(`${target}`);

        if (el.getAttribute("type") == "tel") {
          const number = text.querySelector(".number");
          number.innerText = el.value;
          return;
        }

        text.innerText = el.value;
      });
    }
  });
}
