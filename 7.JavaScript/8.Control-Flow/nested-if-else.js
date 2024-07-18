// When we use an if...else statement inside another if...else statement, we create a nested if...else statement.
// ex:-

import readline from "readline-sync"

let marks = readline.questionInt("Enter the marks : ")

if(marks>=40){
    if(marks>=80){
        console.log("Passed with Distinction")
    }else{
        console.log("Passed")
    }
}else{
    console.log("Failed")
}


