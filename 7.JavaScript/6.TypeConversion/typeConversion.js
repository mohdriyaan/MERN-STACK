// In programming, type conversion is the process of converting data of one type to another. 
// For example, converting string data to number.

/* There are two types of type conversion in JavaScript:

Implicit Conversion - Automatic type conversion.
Explicit Conversion - Manual type conversion.  */

// Implicit Conversion
let a
a = "hello"+ 1   // the + operator converts the 1 to string and concats/join to hello resulting in the string hello1
console.log(a,typeof a)

a = "1" + true // it converts boolean value true to string
console.log(a , typeof a)

a = "1" + null // it conerts null to string value.
console.log(a , typeof a)

// Explicit Conversion
let b
b =  Number("5")
console.log(b , typeof b)

b = Boolean(1)
console.log(b , typeof b)

b = String(true)
console.log(b , typeof b)

