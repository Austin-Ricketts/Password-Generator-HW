// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "}", "^", "_", "`", "~", "|", "\\", "\""];
var entireSelection = [upperCase, lowerCase, numbers, specialChar];
var userChoice = []

function generatePassword() {
 var passLength = prompt("How many characters would you like in your Password? You may choose any cardinal number from 8 to 128, but no less and no more.");
 var response1 = confirm("Would you like to use Upper Case letters? Press 'Confirm' for yes or 'Cancel' for no.");
 if (response1) {
    userChoice.fill(upperCase[upperCase[0], upperCase[1]]);
    for (var i = 0; i < userChoice.length; i++) {
      return (Math.random(entireSelection[0]) * userChoice.length + 1).toString(36).toUpperCase(); 
       }
 }   
 //var response2 = confirm("Would you like to use lower case letters? Press 'Confirm' for yes or 'Cancel' for no.");
 //confirm("Would you like to use numbers? Press 'Confirm' for yes or 'Cancel' for no.");
 //confirm("Would you like to use Special Characters? Press 'Confirm' for yes or 'Cancel' for no.");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
