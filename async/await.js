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
