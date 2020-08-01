### Homework assignment 3 Password Generator

## TODO
- [X] add onclick event for generate password buttion
- [ ] create series of prompts to collect user info
  - [ ] how many characters (between 8-128) check for validity
  - [ ] use lowercase
  - [ ] use upercase
  - [ ] use numeric values
  - [ ] use special characters
- [ ] validate that only at least one of the prompts had a "ok" click. do not allow for all the prompts be anwsered with "cancel" click
- [ ] write function generatePassword() 
- [ ] write funtion to check of all the promts are "cancel" / false


------------------
##Pseduo code

    function collectInfo{}
        create var numberOfChars = null 
        prompt for number of chars in the passsord (between 8-128) store in var numberOfChars
            Check if numberOfChars isType interger then proceed and numberOfChars >8 && <128
            else { error message}

           
    prompt for lowercase store in var "lowercase"
    prompt for uppercase store in var "uppercase"
    prompt for numeric values store in var "numberic"
    prompt for special char store in var "specialChar"

    put all the values in an array config[numberOfChars,lowercase,uppercase,numberic,specialChar]
    retun the array to the caller
    }

    
```