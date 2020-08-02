### Homework assignment 3 Password Generator

## TODO
- [X] add onclick event for generate password buttion
- [X] create series of prompts to collect user info
  - [X] how many characters (between 8-128) check for validity
  - [X] use lowercase
  - [X] use upercase
  - [X] use numeric values
  - [X] use special characters
- [X] create function to validate that only at least one of the prompts had a "ok" click. do not allow for all the prompts be anwsered with "cancel" click
- [ ] write function generatePassword() 
- [ ] write funtion to check of all the promts are "cancel" / false


------------------
##Pseduo code

  ```
  generate password function {
    if lowercase was requested call the lowerCasePwd function 
      
function lowerCasePwd {
      lowerPwd = create and empty string
      alphabet = create an array of off the letters in the Alphabet
  
  for loop (that matches the desired lenght) {
    number = use math.random to generate a whole number between 0-25
    letter = find that element in the array that matches the randon number generated
    lowerPwd = append letter to the string 
    return lowerPwd
  }
  }
  }
  
```