// constructor
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'


console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"


Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }


player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true

console.log(Object.getPrototypeOf(Object.prototype));