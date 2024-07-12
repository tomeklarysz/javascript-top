const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})


// .all returns after everything is completed

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

// .race is just like .all but it returns as soon as 
// the first one is completed instead of waiting 
// for everything to complete

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree 
]).then((message) => {
  console.log(message)
})