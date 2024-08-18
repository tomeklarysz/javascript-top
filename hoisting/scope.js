var scope = "global scope";
function check() 
{
  var scope = "local scope"; 
  function f() 
  { 
    return scope; 
  }
  return f;
}

let s = check()
console.log(s())


const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 500)
}
// logs undefined 10 times