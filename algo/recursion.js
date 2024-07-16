const fibs = (n) => {
  let result = []
  for (let i=0; i<n; i++) {
    if (result.length < 2) {
      result.push(i)
    } else {
      const value = result.slice(-2)[0] + result.slice(-1)[0]
      result.push(value)
    }
  }
  return result
}

const fibsRec = (n) => {
  if (n == 2) {
    return [0, 1]
  } else {
    let arr = fibsRec(n - 1)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return arr
  }
}

console.log(fibs(8))
console.log(fibsRec(8))