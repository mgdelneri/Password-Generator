// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of the different types of characters
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacArray = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Create a variable in which the chosen character types will be put into to create the password
var basket = [];

// Prompting and choosing criteria for the password
function generatePassword() {
  //Prompt asking the user their desired password length
  var lengthChoice = window.prompt("How long would you like your password to be?\nIt can be from 8 to 128 characters.");
  
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Invalid length.");
    generatePassword();
    return;
  }
  
  // Prompt giving user the choice of whether they want Uppercase letters in their password
  var uppercaseChoice = window.confirm("Would you like Uppercase letters included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Prompt giving user the choice of whether they want lowercase letters in their password
  var lowercaseChoice = window.confirm("Would you like lowercase letters included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Prompt asking user if they want numbers in their pasword
  var numericChoice = window.confirm("Would you like numbers included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Prompt giving user the choice of whether they want special characters in their password
  var specialCharacChoice = window.confirm("Would you like special characters included in your password?\n'OK' = Yes\n'Cancel' = No");

  // Loop dependent on desired length of password, followed by if statements for each type of character, to be picked randomly
  for (var i = 0; i < lengthChoice; i += 0) {

    // If uppercase letters are included in the password, pick them randomly from the uppercase letters array
    if (uppercaseChoice) {
      var uppercaseArrayIndex = Math.floor(Math.random() * (uppercaseArray.length - 1)) +1;
      i++;
      if (i > lengthChoice) {
        break;
      };
      basket.push(uppercaseArray[uppercaseArrayIndex]);
    };

    // If lowercase letters are included in the password, pick them randomly from the uppercase letters array
    if (lowercaseChoice) {
      var lowercaseArrayIndex = Math.floor(Math.random() * (lowercaseArray.length - 1)) +1;
      i++;
      if (i > lengthChoice) {
        break;
      };
      basket.push(lowercaseArray[lowercaseArrayIndex]);
    };

    // If numeric characters are included in the password, pick them randomly from the numeric array
    if (numericChoice) {
      var numericArrayIndex = Math.floor(Math.random() * (numericArray.length - 1)) +1;
      i++;
      if (i > lengthChoice) {
        break;
      };
      basket.push(numericArray[numericArrayIndex]);
    };

    // If special characters are included in the password, pick them randomly from the special character array
    if (specialCharacChoice) {
      var specialCharacArrayIndex = Math.floor(Math.random() * (specialCharacArray.length - 1)) +1;
      i++;
      if (i > lengthChoice) {
        break;
      };
      basket.push(specialCharacArray[specialCharacArrayIndex]);
    };
  };

  return basket.join("");

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


