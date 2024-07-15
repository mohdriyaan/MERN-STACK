let arr1 = [0,1,2]
let arr2 = arr1

// Here the data is stored in heap and its pointers[address] is stored in stack.

console.log(arr1)
console.log(arr2)

arr1[0] = 10000

// So if we make some changes to arr1 then the arr2 will also be updated. This array is updated in heap and does not store the new pointer in stack.

console.log(arr1)
console.log(arr2)
