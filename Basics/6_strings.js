const name = "parul"
const repoCount = 50

// console.log(name + repoCount + " Value");

//Your string can span multiple lines.
//You don't have to escape quotation characters.
//You can avoid groupings like: '">'
//You don't have to use the plus operator.

// use backtick
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parulsh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   parul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/Parul240"

//console.log(url.replace('20%', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


// more functions
b = "Rohit"
console.log(b.indexOf("hi"));
console.log(b.indexOf("z"));
console.log(b.startsWith("Ro"));
console.log(b.startsWith("it"));
console.log(b.endsWith("it"));
console.log(b.endsWith("Ro"));

let c = "Shubham"
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.length);
console.log(c.slice(1,5), (1,4));
console.log(c.slice(1));
console.log(c.replace("Sh", "77"));
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(c[3]);
console.log(c[4]);
console.log(c[5]);
console.log(c[6]);
