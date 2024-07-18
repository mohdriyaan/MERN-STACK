// We use a for loop when we need to perform a fixed number of iterations. For example,
for(let i =1 ; i<=5 ; i++){
    console.log("hello") //iterate hello 5 times
}

// Meanwhile, we use a while loop when the termination condition can vary. For example,
import readline from "readline-sync"
let isDisplay = true;
let userChoice

while(isDisplay){
    userChoice= readline.question("Press Y to print hello again: ")
    console.log("hello")
    if(userChoice!="Y"){
        isDisplay=false
    }
}
