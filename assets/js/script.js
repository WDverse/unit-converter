// when i click the convert button
// go over each element in the unitEl
//  and for each of them take the input value and perform the conversion for each metric unit
// insert the results in the corresponding <p> tag
let inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const unitsEl = document.getElementsByClassName("units-el");

function convertUnit() {
  let inputValue = Number(inputEl.value);

  if (isNaN(inputValue)) {
    return;
  }

  for (let i = 0; i < unitsEl.length; i++) {
    const unitEl = unitsEl[i];
    const dataAttr = unitEl.dataset.attr;
    if (dataAttr === "length") {
      unitEl.textContent = inputValue * 3.281;
    } else if (dataAttr === "volume") {
      unitEl.textContent = inputValue * 0.264;
    } else if (dataAttr === "mass") {
      unitEl.textContent = inputValue * 2.204;
    }
  }
  
  inputEl.value = "";
}

btnEl.addEventListener("click", convertUnit);
