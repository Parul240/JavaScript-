// ++++++++++++++++ Numbers ++++++++++++++++++++++++

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);         // Returns a number as a string
// console.log(balance.toFixed(1));                // Returns a number written with a number of decimals

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));        // Returns a number written with a specified length

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   // Returns a number into a string, using locale settings




// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));      // It returns the absolute value of the given number
// console.log(Math.round(4.7));   // It returns closest integer value of the given number
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2));    // It returns a smallest integer value, greater than or equal to the given number
// console.log(Math.floor(4.9));   // It returns largest integer value, lower than or equal to the given number
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());      // returns a random number between 0 (inclusive),  and 1 (exclusive)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 11));       // Returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 100));      // Returns a random integer from 0 to 99
console.log(Math.floor(Math.random()*10) + 1);     // Returns a random integer from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)