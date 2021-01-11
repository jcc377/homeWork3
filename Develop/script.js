// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // get user inputs about the password options
// we have only numeric and lower case
// ask for the lenght of the password
  gatherInput();

  return "dummyPa$$word";

}

function gatherInput() {
  // see how to convert strings to numbers
  var passwordLength = prompt("How long would you like your password to be?");
  // add if statement implementing boundary conditions for password length
  if (passwordLength > 8, passwordLength < 128) {
    passwordLength = passwordLength;
  }
  else {
    passwordLength = "Please Select a Password Length between 8 and 128 characters";
  }

  var holdsNumeric = confirm("Do you want password to contain numberic values?");

  var holdsLowerCase = confirm("Do you want LowerCase Letters in password?");

  var holdsUpperCase = confirm("Do you want Upper Case letters in password?");

  var holdsSpecChars = confirm("Do you want Special Characters in your password?");

  var userInputs = {
    passwordLengthKey: passwordLength,
    holdsNumbericKey: holdsNumeric,
    holdsLowerCaseKey: holdsLowerCase,
    holdsUpperCaseKey: holdsUpperCase,
    holdsSpecCharsKey: holdsSpecChars,
  };

  console.log("These are the user inputs", userInputs);
  
  return userInputs;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
