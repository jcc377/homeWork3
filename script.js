var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChars = ["!", "@", "$", "%", "^", "&", "*"];

var generatedPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
console.log("THIS WORKS")
  var userOptions = gatherInput()

  var combinedChars = [];

  // object & property ex.
if (userOptions.holdsLowerCaseKey === true) {
  // logic to concatinate the lowercased chars with the combinedChars array
  combinedChars = combinedChars.concat(lowerCase);
}

console.log("THIS IS COMBINED CHARS",combinedChars)
// do the same for the rest
if (userOptions.holdsUpperCaseKey === true) {
  combinedChars = combinedChars.concat(upperCase);
}

if (userOptions.holdsNumbericKey === true) {
  combinedChars = combinedChars.concat(numeric);
  }

if (userOptions.holdsSpecCharsKey === true) {
  combinedChars = combinedChars.concat(specChars);
}

  // generate and log a random value from each array above
  
  for (var i = 0; i < userOptions.passwordLengthKey; i++) {
    var randomIndex = Math.floor(Math.random() * combinedChars.length);
    var randomValue = combinedChars[randomIndex];
  //  add inputs to array
    generatedPassword.push(randomValue);
  }
  console.log(generatedPassword);

  return generatedPassword.join('');
}

function gatherInput() {
    var passwordLength = prompt("How long would you like your password to be?");
  // if statement implementing boundary conditions for password length
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

// function generatePassword() {
//   // get user inputs about the password options
// // we have only numeric and lower case
// // ask for the lenght of the password
//   gatherInput();

//   // return "dummyPa$$word";
// }

// var numericRandom = Math.floor(Math.random() * numeric.length);
// console.log(random,numeric[random]);

// var upperCaseRandom = Math.floor(Math.random() * upperCase.length);
// console.log(random,upperCase[random]);

// var lowerCaseRandom = Math.floor(Math.random() * lowerCase.length);
// console.log(random,lowerCase[random]);

// var specCharsRandom = Math.floor(Math.random() * specChars.length);
// console.log(random,specChars[random]);