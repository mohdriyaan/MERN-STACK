// We can use the else if keyword to check for multiple conditions.

/*
The syntax of the else if statement is:

// check for first condition
if (condition1) {
    // if body
}

// check for second condition
else if (condition2){
    // else if body
}

// if no condition matches
else {
    // else body
}
*/

// We can use else if keyword as many times as we want.

import readline from "readline-sync"

let rating = readline.questionInt("Enter the rating : ");

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

