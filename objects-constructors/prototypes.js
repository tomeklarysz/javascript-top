let y = [];
// console.log(Object.getPrototypeOf(y));
// console.log(y.__proto__);

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}


// It is a common practice in JavaScript to define methods 
// on the prototype for increased efficiency and code readability.

// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
  return `${this.name} says Hello.`;
}
// console.log(hero1.greet());


// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}


Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1);
console.log(hero2);

console.log(hero1.attack());
console.log(hero2.heal());

console.log(hero1.greet());

////////////////////////////////

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);