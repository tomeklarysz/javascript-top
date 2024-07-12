let p = new Promise((resolve, reject) => {
  let a = 1 + 2
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

// .then() runs when resolved
p.then((message) => {
  console.log('This is in the then ' + message)
}).catch((message) => {   // when rejected
  console.log('This is in the catch ' + message)
})

// promises are meant to replace callbacks
// example

let userLeft = true
let userWatchingCatMeme = false
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message)
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
})