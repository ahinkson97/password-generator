var lowercaseCharacters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercaseCharacters =['A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbersCharacters= [0,1,2,3,4,5,6,7,8,9]
var specialCharacters =['!','@','#','$','%','&']

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

  var passwordLength= prompt("Enter the length of the password between 8 and 128 characters")
  if (passwordLength <8 || passwordLength > 128) {
    alert("Password is incorrect length")
    return randompassword 
  }
  var useLowercase= confirm("Do you want to use lowercase characters?")
  if (useLowercase === true ) {
    charactersArray.push(lowercaseCharacters)
  }
  var useUpperCase= confirm("Do you want to use uppercase characters?")
  if (useUpperCase === true) {
    charactersArray.push(uppercaseCharacters)
  }
  var useNumbersCharacters= confirm("Do you want to use number characters?")
    if (useNumbersCharacters === true) {
      charactersArray.push(numbersCharacters)
    }
  var useSpecialCharacters= confirm("Do you want to use special characters?")
  if (useSpecialCharacters === true) {
    charactersArray.push(specialCharacters)
  }
  if (charactersArray.length === 0){
    alert("Must select one character type")
    return randompassword
  }
  for (var index=0;index< passwordLength; index ++){
    var randomindex=Math.floor(Math.random()*charactersArray.length)
    var randomCharacterindex=Math.floor(Math.random()*charactersArray[randomindex].length)
    randompassword=randompassword + charactersArray[randomindex] [randomCharacterindex]
  }
  
  return randompassword;
}
//Add event listner to generate button
generateBtn.addEventListener("click", writePassword);
