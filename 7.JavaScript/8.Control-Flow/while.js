// The while loop repeatedly executes a block of code as long as a specified condition is true.
// Synatx of while loop:-
// while(condition){
//      body of while loop
// }

// If the condition evaluates to false, the loop stops.

// ex 1:-
// let i=1
// while(i<=3){
//     console.log(i)
//     i++
// }

// ex 2:-
// while loop
// import readline from "readline-sync"
// let sum = 0
// let num=0

// while(num>=0){
//     sum+=num
//     num = readline.questionInt("Enter the positive number to be added : ")
     
// }

// console.log(`The sum of positive numbers is ${sum}`)

// for loop
import readline from "readline-sync"
let sum = 0;
for(let num = 0; num>=0 ; ){
    sum+= num;
    num = readline.questionInt("Enter the +venumber :")
}
console.log("The sum is "+sum)
