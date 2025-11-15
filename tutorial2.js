// creating a text baset calculator

const prompt = require("prompt-sync")()
function getNumber(numberString) {// this funtion helps us to reuse out code. instead of having multiple while loops
    /*
    getNumber() => the () are called parameters
  => A parameter is a special kind of variable used in a funtion to refer to one 
   of the pieces of data provided as input to the funtion 
    */  
   while (true){
    const  number = parseFloat(prompt('Enter Number ' + numberString + ": "))
    if (isNaN(number)){
        console.log('Invalid Input')
    }else {
        return number
    }
}
}
const number1 = getNumber('One');
const number2 = getNumber('Two');


const operator = prompt('Enter sign: \nchoose the following signs +, -, *, /: ')
// check the value entered 
/*
   Arithmetic operators
    * => multiply
    / => division
    + => addition
    - => subtraction
 */

// Understanding the Switch statement
let result;
let valid = true;

switch(operator){
    case "+": //addition
        result = number1 + number2
        break;
    case "*": //multiplacation of the two numbers input
        result = number1 * number2
        break; // break  helps to close the case
    case "/":
        result = number1 / number2 // this is division of the two numbers
        break; 
    case "-": // this is subtraction of the two numbers
        result = number1 - number2
        break
    default:
        console.log("Invalid input")
        valid = false
        break
}

if (valid) console.log(number1, operator,  number2, "=", result)

   

// function getNumber(numberString) {
//     /*
//     getNumber() => the () are called parameters
// => A parameter is a special kind of variable used in a funtion to refer to one 
//    of the pieces of data provided as input to the funtion 
//     */  
//    while (true){
//     const  number = parseFloat(prompt('Enter Number ' + numberString + ": "))
//     if (isNaN(number2)){
//         console.log('Invalid Input')
//     }else {
//         return number
//     }
// }
// }
