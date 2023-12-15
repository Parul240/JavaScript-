//  Primitive (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let text = "riya sharma"
console.log(text);

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
//console.log(bigNumber);

// find datatype
console.log(typeof(bigNumber));



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "doraemon", "doga"];
console.log(heros);

let myObj = {
    name: "parul",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3