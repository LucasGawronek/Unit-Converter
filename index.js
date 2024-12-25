/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = "";
const units = {
  feet: 3.280839895,
  liter: 0.264,
  kilogram: 2.204,
  meter: 0.3048,
};
const convertBtn = document.getElementById("convert-btn");
const unitInput = document.getElementById("unitInput");
let ulEl = document.getElementById("unit-list");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  userInput = parseFloat(unitInput.value);
  if (isNaN(userInput)) {
    alert("Not a number");
  } else {
    clearList();
    outputLength();
  }
});

function outputLength() {
  mt2Ft = userInput * units.feet.toFixed(4);
  ft2mt = userInput * units.meter.toFixed(4);
  lengthEl.innerHTML += `<p>${userInput} meters = ${mt2Ft} feet | ${userInput} feet = ${ft2mt} meters</p>`;
}

function clearList() {
  lengthEl.removeChild(lengthEl.firstElementChild);
}
