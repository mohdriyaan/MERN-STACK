// An Object holds data in the form of key-value pairs.

// Objects are mutable.

// It is recommended to use const for objects .

const person={
    name:"Riyaan",
    age:23,
    isAlive:true,
}

console.log(person , typeof person)
console.log(person.name) // dot-notation method
console.log(person["age"]) // array-method

person.name = "harry" // data can be change in objects since objects are mutable.
console.log(person)

