// We use logical operators to perform logical operations on boolean expressions.
let x = 3;

// logical AND
// true only if both expression1 and expression2 are true
console.log((x < 5) && (x > 0));  // true
console.log((x < 5) && (x > 6));  // false

// logical OR
// true if either expression1 or expression2 is true
console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// logical NOT
// false if expression is true and vice versa
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true