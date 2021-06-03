//define character arrays 
var lowercaseCharacters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercaseCharacters =['A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbersCharacters= [0,1,2,3,4,5,6,7,8,9]
var specialCharacters =['!','@','#','$','%','&']

//define array to contain character arrays 
var charactersArray=[]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var randompassword = '';
 
  //prompt user for length of password //use command called prompt 
  var passwordLength= prompt("Enter the length of the password between 8 and 128 characters")
  //validate that user has entered between 8 and 128 characters 
  if (passwordLength <8 || passwordLength > 128) {
    alert("Password is incorrect length")
    return randompassword 
  }
  //ask user if they want to use lowercase //use comdand called confirm 
  var useLowercase= confirm("Do you want to use lowercase characters?")
  if (useLowercase === true ) {
    charactersArray.push(lowercaseCharacters)
  }
  //ask user if they want to use uppercase
  var useUpperCase= confirm("Do you want to use uppercase characters?")
  if (useUpperCase === true) {
    charactersArray.push(uppercaseCharacters)
  }
  //ask user if they want to use numbers
  var useNumbersCharacters= confirm("Do you want to use number characters?")
    if (useNumbersCharacters === true) {
      charactersArray.push(numbersCharacters)
    }
  //ask user if they want to use special characters 
  var useSpecialCharacters= confirm("Do you want to use special characters?")
  if (useSpecialCharacters === true) {
    charactersArray.push(specialCharacters)
  }
  //for each affirmative request from the user add the character array to the array to contain character arrays 

  //validate that user has selected 1 of the 4 above 
  if (charactersArray.length === 0){
    alert("Must select one character type")
    return randompassword
  }
  //create the random password that will be x characters in length using a for loop 
  for (var index=0;index< passwordLength; index ++){
    var randomindex=Math.floor(Math.random()*charactersArray.length)
    var randomCharacterindex=Math.floor(Math.random()*charactersArray[randomindex].length)
    randompassword=randompassword + charactersArray[randomindex] [randomCharacterindex]
      // while in the for loop determine the character array to use from the array that contains all the character arrays randomly
      //add a character to the random character variable from the array chosen in line 38 

  }
  
  return randompassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
