// call variable then define using var

console.log(name)  // undefined
var name = 'tomek'


// call variable then define using let or const

console.log(ball)  // ReferenceError
console.log(car)   // ReferenceError

const ball = 'nike premier' 
let car = 'audi'


// hoisting works for function declarations:

getAge(1990)

function getAge(year) {
  console.log(year)
}

// but doesn't work for function expressions:

getYear(1990)  // TypeError: getYear is not a function
var getYear = function(year) {
  console.log(year)
}

getYear(1990)     // ReferenceError: Cannot access 'getYear' before initialization
let getYear = year => {
  console.log(year)
}

getYear(1990)       // ReferenceError: Cannot access 'getYear' before initialization
const getYear = year => {
  console.log(year)
}


// Note - variable initializations are not hoisted,
// only variable declarations are hoisted:

var x;
console.log(x);  // outputs 'undefined' since initialiation is not hoisted
x = 23;

// Note - to avoid hoisting, you can run js in strict mode
// by using 'use strict' on top of the code:

"use strict"
y = 23;     // gives an error since 'y' is not declared
var y;