const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const unitsEl = document.querySelectorAll(".units-el");

const unitConverstions = {
  length: {
    metric: "meters",
    imperial: "feet",
    rate: 3.281,
  },
  volume: {
    metric: "litres",
    imperial: "gallons",
    rate: 0.264,
  },
  mass: {
    metric: "kilos",
    imperial: "pounds",
    rate: 2.204,
  },
};

const convertUnit = () => {
  const inputValue = Number(inputEl.value);

  if (isNaN(inputValue)) {
    return;
  }

  unitsEl.forEach((unit) => {
    const unitType = unit.dataset.attr;
    const getUnit = unitConverstions[unitType];

    const toImperial = (inputValue * getUnit.rate).toFixed(3);
    const toMetric = (inputValue / getUnit.rate).toFixed(3);

    unit.textContent = `${inputValue} ${getUnit.metric} = ${toImperial} ${getUnit.imperial} | ${inputValue} ${getUnit.imperial} = ${toMetric} ${getUnit.metric}`;
  });
};

btnEl.addEventListener("click", convertUnit);
