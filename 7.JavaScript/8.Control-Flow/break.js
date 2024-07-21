// The break statement terminates the loop immediately when it's encountered.
// Ex1:-
for(let i=1; i<=10; i++){
    
    if(i==5){
        break;
    }

    console.log(i)
}

//Ex2:-
import readline from "readline-sync"

let sum=0;
let num

while(true){
    num=readline.questionInt("Enter the +ve number that is to be added: ")
    if(num<0){
        break;
    }
    sum+=num

}

console.log("The sum is : "+sum)

