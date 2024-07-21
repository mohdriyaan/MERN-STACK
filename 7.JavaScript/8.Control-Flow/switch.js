// The JavaScript switch...case statement executes different blocks of code based on the value of a given expression.

// Syntax of the switch...case Statement
/*
switch (expression) {

    case value1:
        // code block to be executed
        // if expression matches value1
        break;

    case value2:
        // code block to be executed
        // if expression matches value2
        break;

    ...

    default:
        // code block to be executed
        // if expression doesn't match any case
}
*/

// Simple Calculator Using Switch Case
import readline from "readline-sync"

let num1 = readline.questionInt("Enter the first number : ")
let num2 = readline.questionInt("Enter the second number : ")

const operator=readline.question("Enter the operator : ")

let result
switch(operator){
    case "+":
        result=num1 + num2
        console.log(`The Addition Of 2 numbers is ${result}`)
        break;
    
    case "-":
        result=num1 - num2
        console.log(`The Subtaction Of 2 numbers is ${result}`)
        break;
            
    case "*":
        result=num1 * num2
        console.log(`The Multiplication Of 2 numbers is ${result}`)
        break;
    
    case "/":
        result=num1 / num2
        console.log(`The Division of 2 numbers is ${result}`)
        break;
    
    case "%":
        result=num1 % num2
        console.log(`The Remainder Of 2 numbers is ${result}`)
        break;
    
    case "**":
        result= num1 ** num2
        console.log(`The Exponentiation OF 2 numbers is ${result}`)
        break;
    
    default:
        console.log("Invalid Operator")
}

// The JavaScript switch statement performs strict type checking, ensuring both the value and the type of the expression match the case value. 

// Sometimes, we may want multiple case values to trigger the same block of code. For this, we can use multiple cases with a single block.

// Let's look at the example below to understand this clearly.
// Program to categorize age

let age = 19;

switch (age) {

    // when age is 13, 14, or 15
    case 13:
    case 14:
    case 15:
        console.log("Early Teen")
        break;

    // when age is 16 or 17
    case 16:
    case 17:
        console.log("Mid Teen");
        break;

    // when age is 18 or 19
    case 18:
    case 19:
        console.log("Late Teen");
        break;

    // when age is none of the above
    default:
        console.log("Other Age Group");
}

// Comparision between if-else and switch-case
// Both switch...case and if...else statements are used for decision-making. However, switch...case and if...else are useful in different conditions:

// Use switch for a large number of conditions based on the same expression, which can be more readable than if...else.
// Use if...else for complex logical conditions that can't be easily expressed as discrete cases.
