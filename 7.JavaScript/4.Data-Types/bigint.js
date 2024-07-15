// BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.

// The regular number data type can handle values less than (2^53 - 1) and greater than -(2^53 - 1).

// A BigInt number is created by appending n to the end of an integer. 

let a = 3000000000000000000000000000000000000000000
console.log(a , typeof a)

a = 3000000000000000000000000000000000000000000n
console.log(a , typeof a)

let b = 100n
let c = a+b
console.log(c , typeof c)

let d = 100 + c // Cannot Mix Bigint data type with other data types until the outher data type is explicitly assigned bigint data type.
console.log(d , typeof d)




