function doSomething() {
  console.log(this)
}

// doSomething()     // logs global object

// The 'this' keyword refers to the object 
// that the function is a property of

let obj = {
  name: 'vivek',
  getName: function() {
    console.log(this.name);
  }
}

obj.getName();  //vivek

/*
In the above code, at the time of invocation, 
the getName function is a property of the object obj,
therefore, this keyword will refer to the object obj, 
and hence the output will be “vivek”.
*/