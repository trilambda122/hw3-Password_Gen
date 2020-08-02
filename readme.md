### Homework assignment 3 Password Generator
Project to generate randomized passwords based on user selections for lowercase, uppercase, numeric or special characters.  
Figuring out the logic on this one was tricky for me. I was mostly on the right track, but...  Special thanks to [Traversy Meida](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) whos videos help me validate some of my logic, and correct some of it as well. 

Overall I learned a lot on this project, especially the ability to call a function by creating the string representation of it using other functions that will resolve to that function name. 



## TODO
- [X] add onclick event for generate password buttion
- [X] create series of prompts to collect user info
  - [X] how many characters (between 8-128) check for validity
  - [X] use lowercase
  - [X] use upercase
  - [X] use numeric values
  - [X] use special characters
- [X] create function to validate that only at least one of the prompts had a "ok" click. do not allow for all the prompts be anwsered with "cancel" click
- [X] figure out how to generate random chars
- [X] write function generatePassword() 
  - [X] check for how many options where selected
  - [X] figure out which options where selected
  - [X] create loop to iterate the same number of times as the length selected by the user and fire off function to get a char
  - [X] append char to password variable 

---


# Code Breakdown

**Four functions created to get random characters from the ASCII character mapping chart [ASCII-CODE](https://www.ascii-code.com)**

- getRandomLower()
- getRandomUpper()
- getRandomNumeric() 
- getRandomSpecial()
  >*uses a string of special chars vs ascii codes.* 

**Password config object to store user selections into** 
```
var pwdConfig = {
    lower: null,
    upper: null,
    numeric: null,
    specialChars: null,
    pwLength: null
};
```

**An object for holding the names of the four random character functions**
```
var randomFunction = {
        lower: getRandomLower,
        upper: getRandomUpper,
        numeric: getRandomNumeric,
        special: getRandomSpecial
    }
```

**Function for prompting users for their options which then get stored into the password config object**
```
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
```

**Function to prompt for the length of the requested password**
```
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
```

**GeneratePassword function**
 This is where all the action happens

We use an array of password config objects to calculate how many options were selected. The sum of this is used as an incrementor for a loop.
```
const configCount = lower + upper + numeric + special;
```

We filter out any of the options that are falsely using the .filter() array method. 

```
 const configArray = [{ lower }, { upper }, { numeric }, { special }].filter(function(item) {
        return Object.values(item)[0];
    });
```
We use a for loop based on the user-selected length;
we then use the .forEach  array method to iterate over each of the array elements. Each of the elements in the array is an individual object. This is important because we use the Object.keys() method to get the our "getRandomxx" function names.  We then call those functions and append the results to the password variable 

```

for (var i = 0; i < length; i += configCount) {
        configArray.forEach(
            function(type) {
                const funcName = Object.keys(type)[0];
                password += randomFunction[funcName]();
            });
    }

```

