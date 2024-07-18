// We use comparison operators to compare two values and return a boolean value (true or false). For example,
const a = 3, b = 2;
console.log(a > b);
console.log(a < b);

// 1.Equal to Operator
// same value, same type
console.log(5 == 5);  // true

// same value, different type
console.log(2 == "2");  // true

// different values, same type
console.log("hello" == "Hello");  // false

// 2.Not Equal to Operator
// same value, same type
console.log(2 != 2);  // false

// same value, different type
console.log(2 != "2");  // false

// different value, same type
console.log(2 != 3);  // true

// 3.Strict Equal To Operator
// same value, same type
console.log(2 === 2);  // true

// same value, different type
console.log(2 === "2");  // false

// 4.Strict Not Equal To Operator
// same value, same type
console.log(2 !== 2);  // false

// same value, different type
console.log(2 !== "2");  // true

// different value, same type
console.log("Hello" !== "World");  // true

// 5.Greater than Operator
// left operand is greater
console.log(3 > 2);  // true

// both operands are equal
console.log(4 > 4);  // false

// left operand is smaller
console.log(2 > 5);  // false

// 6.Greater than or Equal to Operator
// left operand is greater
console.log(3 >= 2);  // true

// both operands are equal
console.log(4 >= 4);  // true

// left operand is smaller
console.log(2 >= 5);  // false

// 7.Less than Operator
// left operand is smaller
console.log(2 < 5);  // true

// both operands are equal
console.log(4 < 4);  // false

// left operand is greater
console.log(3 < 2);  // false

// 8. Less than Or Equal To Operator
// left operand is smaller
console.log(2 <= 5);  // true

// both operands are equal
console.log(4 <= 4);  // true

// left operand is greater
console.log(3 <= 2);  // false
