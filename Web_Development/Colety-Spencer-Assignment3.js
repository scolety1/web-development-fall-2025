// Colety-Spencer-Assignment.js
// CSCI 331 - Assignment 3
// Password Strength Checker

function isStrongPassword(password) {
    
    if (password.length < 8) {
        console.log("No good. Password must be at least 8 characters long.");
        return false;   
    }

    if (password.indexOf("password") !== -1) {
        console.log("No good. Password cannot contain the word 'password'.");
        return false;
    }

    if (password.indexOf("1234") !== -1) {
        console.log("No good. Password cannot contain the phrase '1234'.");
        return false;
    }

    let hasDigit = false;
    for(let i = 0; i < password.length; i++) {
        const letter = password.charCodeAt(i);
        if(letter >= 48 && letter <= 57) {
            hasDigit = true;
            break;
        }
    }
    
    if (!hasDigit) {
        console.log("No good. Password must contain at least one number.")
        return false;
    }

    console.log("Good password!")
    return true;

}

isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No numbers
isStrongPassword("qwerty123") // true