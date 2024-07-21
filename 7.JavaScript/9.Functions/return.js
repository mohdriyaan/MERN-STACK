// We can return a value from a JavaScript function using the return statement.
// Ex.1:-
function addNumbers(value1,value2){
    return value1+value2
}

let sum= addNumbers(20,3)
console.log(sum)

// Ex.2:-
function square(value){
    return value * value
}

let squareValue = square(10)
console.log(squareValue)

// Any code written in the function after the return statement is not executed. For example,
function display() {

    console.log("This will be executed.");

    return "Returning from function.";

    console.log("This will not be executed.");
}

let message = display();
console.log(message);  

// This is what actually happens:
/*
    First, the function prints This will be executed. to the screen.
    Then, it returns the string Returning from function. to the function call.
    Finally, the function terminates its execution.
    The return value is then stored in the message variable and printed.
*/