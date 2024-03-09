// allows to add any properties

class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
new User().sayHi(); // Hello, John!

// The important difference of class fields is that 
// they are set on individual objects, not User.prototype:
class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined


//bound methods
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello
// the value of 'this' will always be corrected with this syntax