// Assignment Code
var generateBtn = document.querySelector("#generate");
//created variable arrays
var min = 8;
var max = 128;
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "}", "^", "_", "`", "~", "|", "\\", "\""];
let userChoice = [];

function generatePassword() {
  var passLength = prompt("How many characters would you like in your Password? You may choose any cardinal number from 8 to 128, but no less and no more.");
  console.log(passLength);
  parseInt(passLength);
  console.log(parseInt(passLength));
  var lengthChoice = parseInt(passLength);

  
  //Couldn't figure out this dowhile loop.
  /*do {
    lengthChoice
  } while (lengthChoice >= 8 || lengthChoice <= 128);
  if (lengthChoice >= 8 || lengthChoice <= 128) {
    return true;
  }*/
  
  if (passLength < min) {
    alert("Number choice too small: Refresh page to try again!");
  }
  if (passLength > max) {
    alert("Number choice too large: Refresh page to try again!");
  }

//Turned confirms into variables in order to bring them into if statements.
  var response1 = confirm("Would you like to use Upper Case letters? Press 'Confirm' for yes or 'Cancel' for no.");
  console.log(response1);
  var response2 = confirm("Would you like to use lower case letters? Press 'Confirm' for yes or 'Cancel' for no.");
  console.log(response2);
  var response3 = confirm("Would you like to use numbers? Press 'Confirm' for yes or 'Cancel' for no.");
  console.log(response3);
  var response4 = confirm("Would you like to use Special Characters? Press 'Confirm' for yes or 'Cancel' for no.");
  console.log(response4);

  if (response1) {
    // grab random character from upperCase
    // push that random character into userChoice
      upperCase = upperCase[Math.floor(Math.random() * upperCase.length)]
        userChoice.push(upperCase);
        console.log(userChoice);
      
    }
    
  if (response2) {
      // grab random character from lowerCase
      // push that random character into userChoice
        lowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)]
          userChoice.push(lowerCase);
          console.log(userChoice);
        
      }
      
  if (response3) {
        // grab random character from numbers
        // push that random character into userChoice
           numbers = numbers[Math.floor(Math.random() * numbers.length)]
            userChoice.push(numbers);
            console.log(userChoice);
          
        }

  if (response4) {
          // grab random character from specialChar
          // push that random character into userChoice
            specialChar = specialChar[Math.floor(Math.random() * specialChar.length)]
              userChoice.push(specialChar);
              console.log(userChoice);
            
          }

  //create a for loop that starts at passLength
  for (var i = 0; i < passLength; i++) {
    console.log(passLength);
    userChoice += (Math.floor(Math.random(passLength) * passLength.length));
  }
    return userChoice;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
