function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7

/*
Functions in JavaScript form closures. A closure refers 
to the combination of a function and the surrounding state in which 
the function was declared. This surrounding state, also called its lexical environment, 
consists of any local variables that were in scope at the time the closure was made. 
Here, add5 is a reference to the resulting function, created when the makeAdding function is executed, 
thus it has access to the lexical environment of the resulting function, 
which contains the first variable, making it available for use. 
*/

function makeFunc() {
const name = "Mozilla";
function displayName() {
  console.log(name);
}
return displayName;
}

const myFunc = makeFunc();
myFunc();

// Practical closure

function makeSizer(size) {
return function () {
  document.body.style.fontSize = `${size}px`;
};
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures