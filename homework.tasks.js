/* Write a JavaScript function to check if given string includes
given symbol */

let str = "I have an idea";
let symbol = "e";


let isIncludesSymbol = (str, symbol) => {
    let symbolWithoutSpaces = symbol.trim();
    let res = str.indexOf(symbolWithoutSpaces);
    if (res >= 0) {
        return true;
    }
    return false;
}

console.log(isIncludesSymbol(str, symbol));



/* Write a JavaScript function that accept two integers and
display the larger*/

let firstNumber = 101;
let secondNumber = 55;

function findBiggestNumber(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
        console.log("These numbers are equal");
    }
    else if (firstNumber > secondNumber) {
        console.log(`${firstNumber}` + " is biggest than " + `${secondNumber}`);
    }
    else{
        console.log(`${secondNumber}` + " is biggest than " + `${firstNumber}`);
    }
}

findBiggestNumber(firstNumber, secondNumber);

/* Write a JavaScript function to check whether a string is blank
or not (string with spaces should be also blank) */

let str = "Hello";

let isEmptyString = (str) => {
    if (str.length == 0 || !str.trim()) {
        return true;
    }
    return false;
}

console.log(isEmptyString(str));


/* Write a JavaScript function to convert a string in abbreviated
form. console.log(abbrev (“Name Surname")) – should be
“N.S.” (should convert lower case names to upper)
*/

let firstName = "Vlad";
let lastName = "horozheiev";

function makeAbbrev(firstName, lastName) {
    let firstName1 = firstName.trim().charAt(0).toUpperCase();
    let lastName1 = lastName.trim().charAt(0).toUpperCase();
    console.log(`${firstName1}` + "." + `${lastName1}` + ".");
}

makeAbbrev(firstName, lastName);


/* Write a JavaScript function with conditional statement to sort
three numbers*/

let firstNumber = 25;
let secondNumber = 20;
let thirdNumber = 15;

function sortNumber(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        if (secondNumber > thirdNumber) {
            console.log(`${firstNumber}` + " , " + `${secondNumber}` + " , " + `${thirdNumber}`);
        }
        else {
            console.log(`${firstNumber}` + " , " + `${thirdNumber}` + " , " + `${secondNumber}`);
        }
    }

    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        if (firstNumber > thirdNumber) {
            console.log(`${secondNumber}` + " , " + `${firstNumber}` + " , " + `${thirdNumber}`);
        } else {
            console.log(`${secondNumber}` + " , " + `${thirdNumber}` + " , " + `${firstNumber}`);
        }
    }

    else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        if (firstNumber > secondNumber) {
            console.log(`${thirdNumber}` + " , " + `${firstNumber}` + " , " + `${secondNumber}`);
        }
        else {
            console.log(`${thirdNumber}` + " , " + `${secondNumber}` + " , " + `${firstNumber}`);
        }
    }
}

sortNumber(firstNumber, secondNumber, thirdNumber);

