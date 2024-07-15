// A JS variable is a container for storing data.
// For EX:-
let num = 5
// Here variable num stores the value of 5

// In JavaScript, we use the var or let or const keywords to declare variables. 

// Difference between var and let
// var can reassign and redeclare the value at the same time. Redeclaring increases memory.
// var is a fuction-scoped variable whcih means it can be accessed anywhere in the function.
var a=10
console.log(a)
{
    var a=20
    console.log(a)
}
console.log(a)

// let can only reassign value and cannot redeclare. USeful for updating value of variable.
// let is a block-scoped variable which means it can only be accessed inside the block of code
let b=90
console.log(b)
{
    let b=100
    console.log(b)
}
console.log(b)

//If we declare variable without any keyword then by default it will use var keyword.

// A constant is a type of variable whose value cannot be changed. For example:-
const x=10
x=203 // It will give error
console.log(x)

// Once a constant is initialized, we cannot change its value.

// We use the assignment operator = to assign a value to a variable.

// In JavaScript, it's possible to declare multiple variables in a single statement.

let name1="hello" , name2="hello1" , name3="hello3";

// If you use a variable without initializing it, it will have an undefined value.
let value
console.log(`Value is ${value}`)

// Rules for Naming JS Variables

// Variable names must start with a letter, an underscore _, or the dollar sign $.
let f , _f , $f;

// Variables cannot start with numbers
// let 1a;

// Variable names are case-sensitive. So age and Age are different variables.
let number =3 , Number= 6
console.log(number)
console.log(Number)

// Variable names cannot be keywords (special words reserved for specific purposes in JavaScript such as if, else, let, var, etc.). 
// let for , var , if

// In JavaScript, variables are generally named in camelCase format if they have multiple words.
// For Ex:- firstName, annualSalary, numberOfBooks, etc.
// t's a good practice to give a descriptive name to a variable.