// Asynchronous code can become difficult to follow 
// when it has a lot of things going on. async and await 
// are two keywords that can help make asynchronous read 
// more like synchronous code. This can help code look 
// cleaner while keeping the benefits of asynchronous code.

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};


async function f() {
  return 1;
}

f().then(console.log)

async function r() {
  await Promise.reject("Failed Promise");
}
r().catch(err => console.error(err))

// await works only inside async functions
// The keyword await makes JavaScript wait 
// until that promise settles and returns its result.

// It's just a more elegant syntax of getting the promise
// result than promise.then

async function d() {
  try {
    let response = await fetch('http://no-such-url');
    let user = await response.json();
  } catch(err) {
    console.error(err);
  }
}

d();


// let results = await Promise.all([
  // fetch(url1),
  // fetch(url2),
// ])

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then(sum => {
  console.log(sum);
});