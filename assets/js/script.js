const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const unitsEl = document.getElementsByClassName("units-el");

function convertUnit() {
  const inputValue = Number(inputEl.value);

  if (Number.isNaN(inputValue)) {
    alert("Enter numbers only!")
    return;
  }

  for (let i = 0; i < unitsEl.length; i++) {
    const unitEl = unitsEl[i];
    const dataAttr = unitEl.dataset.attr;
    if (dataAttr === "length") {
      const toFeet = (inputValue * 3.281).toFixed(3);
      const toMeters = (inputValue / 3.281).toFixed(3);
      unitEl.textContent = `${inputValue} meters = ${toFeet} feet | ${inputValue} feet = ${toMeters} meters`;

    } else if (dataAttr === "volume") {
      const toGallons = (inputValue * 0.264).toFixed(3);
      const toLitres = (inputValue / 0.264).toFixed(3);
      unitEl.textContent = `${inputValue} litres = ${toGallons} gallons | ${inputValue} gallons = ${toLitres} litres`

    } else if (dataAttr === "mass") {
      const toPounds = (inputValue * 2.204).toFixed(3);
      const toKilos = (inputValue / 2.204).toFixed(3);
      unitEl.textContent = `${inputValue} kilos = ${toPounds} pounds | ${inputValue} pounds = ${toKilos} kilos`;
    }
  }
}

btnEl.addEventListener("click", convertUnit);
