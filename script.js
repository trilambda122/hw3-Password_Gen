// Assignment Code
var generateBtn = document.querySelector("#generate");

// create password object that can store all the values
var pwdConfig = {
    lower: null,
    upper: null,
    numeric: null,
    specialChars: null,
    pwLength: null
};

// Get all the Y or N values 
function promptForValues(displayString) {
    answerInBounds = false;
    while (answerInBounds === false) {
        let answer = prompt(displayString);
        answer = answer.toUpperCase();
        if (answer === "Y" || answer === "N") {

            answerInBounds = true;
            return answer;
        } else {
            alert("please use Y or N")
        }
    }
}

// get the lenght of the pasword
function promptForLength(displayString) {
    answerInBounds = false;

    while (answerInBounds === false) {
        answer = prompt(displayString)
        if (answer >= 8 && answer <= 128) {
            answerInBounds = true;
            return answer;
        } else {
            alert("number between 8 and 128 please")

        }

    }
}


function generatePassword() {

    console.log("im gonna be doing stuff here");
    var randomLetters = Math.random(128).toString(36).substr(14);
    console.log(randomLetters);
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

//Main code  here
// create password object and fill it with the config values

pwdConfig.lower = promptForValues("would you like lowercase values");
pwdConfig.upper = promptForValues("would you like uppercase values");
pwdConfig.numeric = promptForValues("would you like numeric values");
pwdConfig.specialChars = promptForValues("would you like special charaters values");
pwdConfig.pwLength = promptForLength("what lenght would you like your password to be? (number between 8 and 128 please)")

console.log(pwdConfig)