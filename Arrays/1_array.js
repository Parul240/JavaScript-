// array

const myArr = [0, 1, 2, 3, 4, 5]    // Arrays are variables which can hold more than one value
// console.log(myArr);              // accessing values
// console.log(myArr.length);         // define length

const fruits = ["banana", "apple", "grapes"]
const a1 = [7, "Parul", false]            // can be different types

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);          // finding the length


// Array methods

// myArr.push(6)
// myArr[0] = 666                  // Changing the values
// console.log(myArr)
// console.log(myArr[0])
// console.log(myArr, typeof myArr)     
// myArr.push("Parul")       // Adds a new element at the end of the array
// myArr.pop()               // Removes last element from the array

// myArr.unshift("Shubham")          // Adds element to the beginning returns new array length
// myArr.shift()                     // Removes first element and returns it

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
