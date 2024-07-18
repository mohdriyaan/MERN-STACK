// We use the if keyword to execute code based on some specific condition.
// Synatax:- if(condition){
//              //block of code
//           }

/*  The if keyword checks the condition inside the parentheses ().
    If the condition is evaluated to true, the code inside { } is executed.
    If the condition is evaluated to false, the code inside { } is skipped.
    -->  The code inside { } is also called the body of the if statement.
*/
import readline from "readline-sync"

let num = readline.questionInt("Enter the number : ")
if(num>=10){
    console.log("The number is greater than or equal to 10")
}

console.log("nice number")







