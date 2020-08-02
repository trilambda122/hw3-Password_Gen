// Assignment Code
var generateBtn = document.querySelector("#generate");

// create password object that can store all the options that the user selects
var pwdConfig = {
    lower: null,
    upper: null,
    numeric: null,
    specialChars: null,
    pwLength: null
};

// create an object that stores the name of the functions for creating random chars
var randomFunction = {
        lower: getRandomLower,
        upper: getRandomUpper,
        numeric: getRandomNumeric,
        special: getRandomSpecial
    }
    // Get all the Y or N values and set them to boolen values. 
function promptForValues(displayString) {
    answerInBounds = false;
    while (answerInBounds === false) {
        let answer = prompt(displayString);
        answer = answer.toUpperCase();
        if (answer === "Y") {
            answer = true;
            return answer;
        } else if (answer === "N") {
            answer = false;
            return answer;
        } else {
            alert("please use Y or N")
        }
    }
}

// get the length of the pasword and check it is in bounds between 8 and 128
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

// Create a set of fucntions to get random character based on ASCII char codes
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    const specialChars = "!@#$%^&*()<>?/+-=,.";
    return specialChars[Math.floor(Math.random() * specialChars.length)];
}




// This is the generate password  fucntion where all the action happens
function generatePassword(config) {

    var lower = config.lower;
    var upper = config.upper;
    var numeric = config.numeric;
    var special = config.specialChars;
    var length = config.pwLength;
    var password = '';
    // get the number of true options in the pwconfig object by just adding them together. this works because false=0
    const configCount = lower + upper + numeric + special;

    //put all options that are true into an array.
    const configArray = [{ lower }, { upper }, { numeric }, { special }].filter(function(item) {
        return Object.values(item)[0];
    });
    // check if no options where selected and print message if true 
    if (configCount === 0) {
        return '"You did not select any options! Please refresh and try again"';
    }

    // create a loop for the length of the desired passowrd
    //use the forEach method to loop through the config array, use thoose values to fireoff the correct function that will return a single char, and add it to the password on each loop. 
    for (var i = 0; i < length; i += configCount) {
        configArray.forEach(
            function(type) {
                const funcName = Object.keys(type)[0];
                password += randomFunction[funcName]();
            });



    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword(pwdConfig);
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Main code  here
// create password object and fill it with the config values from the promts
pwdConfig.lower = promptForValues("would you like lowercase values");
pwdConfig.upper = promptForValues("would you like uppercase values");
pwdConfig.numeric = promptForValues("would you like numeric values");
pwdConfig.specialChars = promptForValues("would you like special charaters values");
pwdConfig.pwLength = promptForLength("what lenght would you like your password to be? (number between 8 and 128 please)")