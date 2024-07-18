import readline from "readline-sync"
let num = readline.questionInt("Enter the number you want the multiplication table of : ")
for(let i = 1 ; i<=10 ; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}
