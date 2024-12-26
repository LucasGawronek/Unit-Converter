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
  gallon: 3.78541178,
  pound: 0.45359237,
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
    outputVolume();
    outputMass();
  }
});

function outputLength() {
  mt2Ft = userInput * units.feet;
  ft2mt = userInput * units.meter;
  lengthEl.innerHTML += `${userInput} meter = ${mt2Ft.toFixed(
    3
  )} feet | ${userInput} feet = ${ft2mt.toFixed(3)} meter`;
}

function outputVolume() {
  lt2Gal = userInput * units.liter;
  gal2Lt = userInput * units.gallon;
  volumeEl.innerHTML += `${userInput} liter = ${lt2Gal.toFixed(
    3
  )} gallon | ${userInput} gallon = ${gal2Lt.toFixed(3)} liter`;
}

function outputMass() {
  kg2Pnd = userInput * units.kilogram;
  pnd2Kg = userInput * units.pound;
  massEl.innerHTML += `${userInput} kilogram = ${kg2Pnd.toFixed(
    3
  )} pound | ${userInput} pound = ${pnd2Kg.toFixed(3)} kilogram`;
}

function clearList() {
  lengthEl.innerHTML = "";
  volumeEl.innerHTML = "";
  massEl.innerHTML = "";
}
