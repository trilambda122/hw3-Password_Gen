// Assignment Code
var generateBtn = document.querySelector("#generate");

// Take all the parms and generate the password.
function generatePassword() {

    console.log("im gonna be doing stuff here");
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    passwordText.value = "SOMESTUFF";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);