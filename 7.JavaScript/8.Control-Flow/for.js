// In JavaScript, the for loop is used for iterating over a block of code a certain number of times, 
// or to iterate over the elements of an array.

// Syntax
// for(initialExpression ; condition ; updateExpression){
//       block of code
// }

/* Here,
    initialExpression :- Initializes a counter variale
    condition:- If true, the code will be executed until the condition is false
    updateExpression:- Updates the initialExpression
*/

// Ex 1 :-
for(let i=1 ; i<=5 ; i++){
    console.log(i)
}

// Ex 2 :-
import readline from "readline-sync"

let sum = 0
let n = readline.questionInt("Enter the n natural number : ")
for(let i=1 ; i<=n ; i++){
    sum+= i;
}

console.log(`The sum of n natural no.s is : ${sum}`)

