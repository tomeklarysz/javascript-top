export class HashMap {
  
  constructor () {
    this.buckets = []
    for (let i=0; i<16; i++) {
      this.buckets.push('')
    }
    this.capacity = 16
    this.load = 0.75
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
  
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % this.capacity
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    this.buckets[index] = value
    if (this.entries().length >= this.capacity * this.load) {
      for (let i=this.capacity; i<this.capacity*2; i++) {
        this.buckets.push('')
      }
      this.capacity *= 2
    }
  }

  get(key) {
    let index = this.hash(key)
    return index <= this.buckets.length ? this.buckets[index] : null
  }

  has(key) {
    let keys = Array.from(this.buckets.keys())
    keys.forEach(val => {
      if (val == key) return true
    })
    return false
  }
  
  remove(key) {
    if (this.has(key)) {
      this.buckets.splice(this.hash(key), 1)
    }
    return this.has(key)
  }
  
  length() {
    return Array.from(this.buckets.keys()).length
  }

  clear() {
    for (let i=0; i<this.buckets.length; i++) {
      this.buckets[i] = undefined
    }
  }

  keys() {
    let indexes = []
    for (let i=0; i<this.buckets.length; i++) {
      if (this.buckets[i] !== '') {
        indexes.push(i)
      }
    }
    return indexes
  }
  
  values() {
    let result = []
    for (let i=0; i<this.buckets.length; i++) {
      if (this.buckets[i] !== '') {
        result.push(this.buckets[i])
      }
    }
    return result
  }

  entries() {
    let result = []
    for (let i=0; i<this.buckets.length; i++) {
      if (this.buckets[i] !== '') {
        result.push([i, this.buckets[i]])
      }
    }
    return result
  }
}