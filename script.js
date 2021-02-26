// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompting and choosing
var criteria = function() {
  //Ask user what criteria they want for their password
  var lengthChoice = window.prompt("How long would you like your password to be?\nPick between 8 and 128 characters.");

  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Invalid length.");
    //? How to go back to lengthChoice prompt?//
  }

  //? This goes with the Random Functions!!//
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    //? Where is this info stored so it can be used to generate password later?//
  }

  var uppercaseChoice = window.prompt("Would you like Uppercase letters in your password?\nAnswer: Y or N");

  if (!uppercaseChoice) {
    window.alert("Please answer Y or N");
    //? How to go back to uppercaseChoice?//
  }
  //? If == Y/N statements?//

  var lowercaseChoice = window.prompt("Would you like lowercase letters in your password?\nAnswer: Y or N")

  if (!lowercaseChoice) {
    window.alert("Please answer Y or N");
  }
}

criteria();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




/*//Functions for generating random criteria

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

console.log(getRandomSymbol());*/