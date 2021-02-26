// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompting and choosing criteria for the password
var criteria = function() {
  //Prompt asking the user their desired password length
  var lengthChoice = window.prompt("How long would you like your password to be?\nIt can only be from 8 to 128 characters.");
  
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Invalid length.");
    //? How to go back to lengthChoice prompt?//
  }

  if (!lengthChoice) {
    window.alert("Please choose a password length.")
  }

  /*//? This goes with the Random Functions!!//
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    //? Where is this info stored so it can be used to generate password later?//
  }*/

  //Prompt giving user the choice of whether they want Uppercase letters in their password
  var uppercaseChoice = window.prompt("Would you like Uppercase letters included in your password?\nAnswer: Y or N");

  if (!uppercaseChoice) {
    window.alert("Please answer Y or N");
    //? How to go back to uppercaseChoice?//
  }
  //? If == Y/N statements?//

  //Prompt giving user the choice of whether they want lowercase letters in their password
  var lowercaseChoice = window.prompt("Would you like lowercase letters included in your password?\nAnswer: Y or N")

  if (!lowercaseChoice) {
    window.alert("Please answer Y or N");
    //? How to go back to lowercaseChoice?//
  }
  //? If == Y/N statements?//

  //Prompt asking user if they want numbers in their pasword
  var numericChoice = window.prompt("Would you like numbers included in your password?\nAnswer: Y or N");

  if (!numericChoice) {
    window.alert("Please answer Y or N");
    //? How to go back to numericChoice?//
  }

  //Prompt giving user the choice of whether they want special characters in their password
  var characterChoice = window.prompt("Would you like special characters included in your password?\nAnswer: Y or N");

  if (!characterChoice) {
    window.alert("Please answer Y or N");
    //? How to go back to characterChoice?//
  }
}

criteria();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



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