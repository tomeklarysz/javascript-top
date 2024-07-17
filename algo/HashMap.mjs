export class HashMap {
  
  constructor () {
    this.buckets = []
    for (let i=0; i<16; i++) {
      this.buckets.push([])
    }
    this.capacity = this.buckets.length
    this.load = 0.75
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key)
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    this.buckets[index].push([key, value])
    this.capacity = this.buckets.length
    if (this.length() > this.capacity * this.load) {
      let i = this.capacity
      const limit = 2 * this.capacity
      while (i < limit) {
        this.buckets.push([])
        i++
      }
      this.capacity = this.buckets.length
    }
  }

  get(key) {
    let index = this.hash(key)
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1]
      }
    }
    return null
  }

  has(key) {
    let index = this.hash(key)
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) return true
    }
    return false
  }

  remove(key) {
    if (this.has(key)) {
      let index = this.hash(key)
      for (let i=0; i<this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          this.buckets[index].splice(i, 1)
        }
      }
      this.capacity = this.buckets.length
    }
    return this.has(key)
  }

  length() {
    let result = 0
    for (let pairs of this.buckets) {
      pairs.forEach(() => result++)
    }
    return result
  }

  clear() {
    for (let pairs of this.buckets) {
      while (pairs.length > 0) {
        pairs.pop()
      }
    }
  }

  keys() {
    let result = []
    for (let pairs of this.buckets) {
      for (let pair of pairs) {
        result.push(pair[0])
      }
    }
    return result
  }

  values() {
    let result = []
    for (let pairs of this.buckets) {
      for (let pair of pairs) {
        result.push(pair[1])
      }
    }
    return result
  }

  entries() {
    let result = []
    for (let pairs of this.buckets) {
      for (let pair of pairs) {
        result.push(pair)
      }
    }
    return result
  }
}