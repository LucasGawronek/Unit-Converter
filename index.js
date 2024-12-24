/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = "";
const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;
const convertBtn = document.getElementById("convert-btn");
const unitInput = document.getElementById("unitInput");

convertBtn.addEventListener("click", function () {
  userInput = parseFloat(unitInput.value);
  if (isNaN(userInput)) {
    alert("Not a number");
  } else {
    console.log(userInput);
  }
});

function outputLength() {}
