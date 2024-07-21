// A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.
// Ex:-
function greet(){
    console.log("Hello Hi")
}
greet() // call function

// Here function keyword is used to create a function. greet() is the name of the function.
// and console.log("Hello Hi") is the body of the function.

// Benefits of using function
// 1. Reusable Code:- Since functions are independent blocks of code, you can declare function once and use it multiple times.
// 2. Organized Code:- Dividing small tasks into different functions making the code easy to organize.
// 3. Readability:- Functions increase readability by reducing redundancy and improving the structure of our code.

// Function Arguments
// Arguments are values that are passed to the function when you call it.
function name(value){
    console.log("Hi my name is : "+value)
}
name("JAck") // function call
// Here "JAck" is a value of an argument.

// Ex: Adding Two Numbers Function
function add(num1,num2){
    console.log(num1+num2)
}

add(8,10)
add(0,12)

