// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCaseLetters = ["A", "B", "C"]

//Prompting and choosing criteria for the password
function generatePassword() {
  //Prompt asking the user their desired password length
  var lengthChoice = window.prompt("How long would you like your password to be?\nIt can only be from 8 to 128 characters.");
  
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Invalid length.");
    generatePassword();
    return;
  }

  //Prompt giving user the choice of whether they want Uppercase letters in their password
  var uppercaseChoice = window.confirm("Would you like Uppercase letters included in your password?\nAnswer: Y or N");

  //Prompt giving user the choice of whether they want lowercase letters in their password
  var lowercaseChoice = window.confirm("Would you like lowercase letters included in your password?\nAnswer: Y or N")

  //Prompt asking user if they want numbers in their pasword
  var numericChoice = window.confirm("Would you like numbers included in your password?\nAnswer: Y or N");

  //Prompt giving user the choice of whether they want special characters in their password
  var characterChoice = window.confirm("Would you like special characters included in your password?\nAnswer: Y or N");

  var basket = []
  
  if (uppercaseChoice) {
    basket = basket.concat(upperCaseLetters);
  }
  console


  
  return"password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
