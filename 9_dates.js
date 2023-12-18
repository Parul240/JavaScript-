// Dates

let myDate = new Date()
// console.log(myDate.toString());          // automatically converted to a string
// console.log(myDate.toDateString());      // converts a date to a more readable format
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)      // 3 numbers specify year, month, and day

/* Note: In JavaScript, January is month number 0, February is number 1, ...
   Finally, December is month number 11.
*/

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)     // 5 numbers specify year, month, day, hour, and minute
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// Timestamps 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})