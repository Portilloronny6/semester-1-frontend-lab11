document.querySelector(".crear-matriz").addEventListener("click", (e) => {
  let tamano = document.querySelector(".tamano").value;
  if (!tamano) {
    return alert("Ingresa un numero!");
  }
  tamano = parseInt(tamano);
  document.querySelector(".elementos").disabled = false;
});

document.querySelector(".elementos").addEventListener("keydown", () => {
  let currentInput = document.querySelector(".elementos").value;
  let tamano = document.querySelector(".tamano").value;
  if (currentInput.split(", ").length > parseInt(tamano)) {
    document.querySelector(".elementos").disabled = true;
    const elementos = currentInput.split(", ").slice(0, tamano);
    const elementosInt = elementos.map(function (x) {
      return parseInt(x);
    });
    console.log(elementosInt);
  }
});
