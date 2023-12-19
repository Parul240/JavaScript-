const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// using push
// marvel_heros.push(dc_heros)      // allows you to "push" (add) new values to the end of an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

arr3.push(...arr2, ...arr1);

console.log(arr3);
// [7, 8, 9, 4, 5, 6, 1, 2, 3]

// using concat
// const allHeros = marvel_heros.concat(dc_heros)        // arrays to combine the contents of an array with new values to form a new array
// console.log(allHeros);

const mergedArr = arr2.concat(arr3, arr1);
console.log(mergedArr);
// [4, 5, 6, 7, 8, 9, 1, 2, 3]

// using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const addedArr = [...arr2, ...arr3, ...arr1];
console.log(addedArr);
// [4, 5, 6, 7, 8, 9, 1, 2, 3]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// using Array flat() method
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Parul")); // false
console.log(Array.from("Parul"));
console.log(Array.from({ name: "parul" })); // []  interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
