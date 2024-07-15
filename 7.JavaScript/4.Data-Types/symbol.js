// A Symbol is a unique and primitive value.

// When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. 

let s1 =Symbol(10) //It is stored in Call Stack 10...235678 
let s2 =Symbol(10) //It is stored in Call Stack 10...457965486
console.log(s1==s2 , typeof s1, typeof s2) //Here the addresses are compared

