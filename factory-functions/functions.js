const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

console.log(createUser("tomek"));
console.log(User("tomek"));
console.log(new User("tomek"));

// we need new keyword to create object using constructor

// The object shorthand notation

const nick = "Bob";
const age = 28;
const color = "red";

const thatObject = { nick: nick, age: age, color: color };

// if we have a variable with the same name as that 
// of the property to which we are assigning it

const nowFancyObject = { nick, age, color };

// If you wanted to log these values, earlier,
// you would have done the following
console.log(nick, age, color);
// which would have resulted in a mess - Bob 28 red

// Try wrapping it in some { curly braces } now,
// which makes it an object!
console.log({ nick, age, color });
// now it logs as - { name: "Bob", age: 28, color: "red" }


// Destructing

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;
console.log(a);
console.log(b);

const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array