// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Functions for generating random criteria

//Random LowerCase
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};

console.log(getRandomLowerCase());

//Random UpperCase
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
};

console.log(getRandomUpperCase());

//Random Number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
};

console.log(getRandomNumber());

//Random SpecialCharacters
function getRandomSymbol() {
  var symbol = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

console.log(getRandomSymbol());