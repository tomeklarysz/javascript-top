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


function mergeSort(array, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r-l) / 2)
    mergeSort(array, l, m)
    mergeSort(array, m+1, r)
    merge(array, l, m, r)
  }
}

function merge(array, l, m, r) {
  let N1 = []
  let N2 = []
  let n1 = m - l + 1
  let n2 = r - m 
  for (let i=0; i<n1; i++) {
    N1[i] = array[l + i]
  }
  for (let j=0; j<n2; j++) {
    N2[j] = array[m + 1 + j]
  }

  let i = 0
  let j = 0
  let k = l

  while (i < n1 && j < n2) {
    if (N1[i] <= N2[j]) {
      array[k] = N1[i]
      i++
    } else {
      array[k] = N2[j]
      j++
    }
    k++
  }

  for (; i<n1; i++) {
    array[k] = N1[i]
    k++
  }
  for (; j<n2; j++) {
    array[k] = N2[j]
    k++
  }
}


// console.log(fibs(8))
// console.log(fibsRec(8))
let arr = [3, 2, 1, 13, 8, 5, 0, 1]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)