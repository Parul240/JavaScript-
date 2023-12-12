// 1. Arithmetic operators

let age = 3;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);


// 2. Assignment Operators

//  =  -> x = y
//  +=   -> x = x + y
//  -=   -> x = x - y
//  *=   -> x = x * y
//  /=   -> x = x / y
//  %=   -> x = x % y
//  **=   -> x = x ** y


// 3. Comparison operators

// ==	equal to		
// ===	equal value and equal type		
// !=	not equal		
// !==	not equal value or not equal type		
// >	greater than		
// <	less than		
// >=	greater than or equal to	
// <=	less than or equal to
// ?    ternary opr

//console.log("3" == 3)
//console.log("3" === 3)    not same
//console.log("2" === "2")    strict check

console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// avoid
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

/*
the reason is that an equality check == and comparisons 
<, 
>=,
<=
*/