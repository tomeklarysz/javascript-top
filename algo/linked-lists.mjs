export class LinkedList {
  
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  append(value) {
    if (this.size === 0) {
      this.head = new Node(value, null)
      this.tail = this.head
    } else {
      let temp = this.head
      while (temp.next !== null) {
        temp = temp.next
      }
      temp.next = new Node(value, null)
    }
    this.size++
  }

  prepend(value) {
    this.head = new Node(value, this.head)
    this.size++
  }

  at(index) {
    let i = 0
    let current = this.head
    while (i <= index) {
      current = current.next
      i++
    }
    return current
  }

  pop() {
    this.tail = null
    if (this.size > 0) this.size--
  }

  contains(value) {
    let i = 0
    let current = this.head
    while (i < this.size) {
      if (current.value == value) {
        return true
      }
      current = current.next
      i++
    }
    return false
  }

  find(value) {
    let current = this.head
    for (let i=0; i<this.size; i++) {
      if (current.value === value) {
        return i
      }
      current = current.next
    }
    return null
  }

  toString() {
    let result = ''
    let current = this.head
    while (current !== null) {
      result = result.concat(`( ${current.value} ) -> `)
      current = current.next
    }
    return result.concat('null')
  }
}

export class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }
}