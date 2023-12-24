let arr = [1, 13, 5, 7, 11];

// for each() loop
arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

// classical array
/*
let newArr = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element ** 2);
}
console.log(newArr);
*/

// using map() method
let newArr = arr.map((e, index, array) => {
  return e ** 2;
});

console.log(newArr);

// using filter() array
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(arr.filter(greaterThanSeven));

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

// array reduce()
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
  return a + b;
};

console.log(arr2.reduce(red));

// for... in loop
const person = {
  name: "John",
  age: 30,
  job: "developer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for... of loop
let a1 = [99, 44, 86, 79];
for (const iterator of a1) {
  console.log(iterator); // also called value, element
}
