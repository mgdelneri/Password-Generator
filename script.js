// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array elements for different categories of character options
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacChoice = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
console.log(numericChoice);
console.log(specialCharacChoice);
// Prompting and choosing criteria for the password
function generatePassword() {
  //Prompt asking the user their desired password length
  var lengthChoice = window.prompt("How long would you like your password to be?\nIt can only be from 8 to 128 characters.");
  
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Invalid length.");
    generatePassword();
    return;
  }

  // Prompt giving user the choice of whether they want Uppercase letters in their password
  var uppercaseChoice = window.confirm("Would you like Uppercase letters included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Prompt giving user the choice of whether they want lowercase letters in their password
  var lowercaseChoice = window.confirm("Would you like lowercase letters included in your password?\n'OK' = Yes\n'Cancel' = No")

  // Prompt asking user if they want numbers in their pasword
  var numericChoice = window.confirm("Would you like numbers included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Prompt giving user the choice of whether they want special characters in their password
  var specialCharacChoice = window.confirm("Would you like special characters included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Create a "basket" where all of the possible characters go into
  var basket = []
  
  // Throw characters in the "basket" if user choice is "true" for each character category
  if (uppercaseChoice) {
    basket = basket.concat(uppercaseLetters);
  }

  if (lowercaseChoice) {
    basket = basket.concat(lowercaseLetters);
  }

  if (numericChoice) {
    basket = basket.concat(numericChoice);
  }

  if (specialCharacChoice) {
    basket = basket.concat(specialCharacChoice);
  }

  console.log(basket);
  
  return"password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
