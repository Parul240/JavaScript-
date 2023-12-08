/* 
JavaScript Variables can be declared in 3 ways:

Using var(globally scoped)
Using let(blocked scoped)
Using const
*/

var a = 5;
//console.log(a);

let b = 10;
b = b + 1
//console.log(b);

var c = "Parul";
//console.log(c);
//console.log(a+b);
//console.log(a+b+10);


var_a = "Ria";
//console.log(var_a)
//console.log(typeof a, typeof b, typeof c, typeof var_a);


//var 55a = "shubham";             Don't start number

const a1 = 7;
//a1 = a1 + 1;              not allowed bcoz a1 is constant
//console.log(a1);

const accountId = 17788995
let accountEmail = "parul@google.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

//console.log(accountEmail);
//console.log(accountPassword);
//console.log(accountCity);
//console.log(accountId);

// accountId = 2 // not allowed


accountEmail = "ps@ps.com"
accountPassword = "21212121"
accountCity = "Gurgaon"


/*
always prefer use let
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

