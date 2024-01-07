/*
In JavaScript, almost "everything" is an object.
Dates, Maths, Regular expressions, Arrays, Functions, Objects are always objects.
Booleans, Numbers, Strings can be objects (if defined with the new keyword)
*/

// singleton obj
// Object.create

// object literals

const JsUser = {}
const mySym = Symbol("key1");

const JsUser = {
  name: "Parul",
  "full name": "Parul Sharma",
  [mySym]: "mykey1",
  age: 18,
  location: "Mathura",
  email: "parul@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "parul@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "parul@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
