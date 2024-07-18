// We use the else keyword to execute code when the condition specified in the preceding if statement evaluates to false.

// The syntax of the else statement is:
// if (condition) {
    // block of code
    // execute this if condition is true
// }
// else {
    // block of code
    // execute this if condition is false
// }

// Ex:-
import readline from "readline-sync"
let age = readline.questionInt("Enter your age : ")
if(age>=18){
    console.log("You are an adult")
}else{
    console.log("You are a minor")
}
