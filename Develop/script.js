// Assignment Code
var generateBtn = document.querySelector("#generate");
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "}", "^", "_", "`", "~", "|", "\\", "\""];
var userChoice = [];
var response1;
//var entireSelection = [upperCase, lowerCase, numbers, specialChar];

function generatePassword() {
 var passLength = prompt("How many characters would you like in your Password? You may choose any cardinal number from 8 to 128, but no less and no more.");
      console.log(passLength);
      parseInt(passLength);
      console.log(parseInt(passLength));
      var lengthChoice = parseInt(passLength);
      
        
 var response1 = confirm("Would you like to use Upper Case letters? Press 'Confirm' for yes or 'Cancel' for no.");
 console.log(response1);       
 var response2 = confirm("Would you like to use lower case letters? Press 'Confirm' for yes or 'Cancel' for no.");
 console.log(response2);
 var response3 = confirm("Would you like to use numbers? Press 'Confirm' for yes or 'Cancel' for no.");
 console.log(response3);
 var response4 = confirm("Would you like to use Special Characters? Press 'Confirm' for yes or 'Cancel' for no.");
 console.log(response4);

    if (response1) push1 = function() {
      userChoice.push.apply(upperCase);
      console.log(userChoice); 
    }

    if (response2) push2 = function() {
      userChoice.push.apply(lowerCase);
      console.log(userChoice); 
    }

    if (response3) push3 = function() {
      userChoice.push.apply(numbers);
      console.log(userChoice); 
    }

    if (response4) push4 = function() {
      userChoice.push.apply(specialChar);
      console.log(userChoice); 
    }  

  for (var i = 0; i < userChoice; i++) {
    return (Math.random(userChoice) * lengthChoice.length + 1).toString(36);
}
}


 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
