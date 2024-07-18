// The do...while loop executes a block of code once, then repeatedly executes it as long as the specified condition is true.
// The syntax of the do...while loop is:
// do{
    //body of loop
// }while(condition)

// ex 1
// let i =3
// do{
    // console.log(i--)
// }while(i>=1)

// ex 2
import readline from "readline-sync"
let num=0 , sum = 0
do{
    sum+=num
    num = readline.questionInt("Enter the +ve number to be added : ") 
}while(num>=0)

console.log(`The sum of +ve numbers is ${sum}`)


