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