import { LinkedList, Node } from "./linked-lists.mjs";

const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


// tests
console.log(list.head)  // works
console.log(list.tail)  // works

list.prepend("skibidi") // works
console.log('at index 2: ' + list.at(2).value)  // cat - works
console.log(list.head)
console.log(list.toString())  // works
console.log(list.size)   // works
console.log(list.contains('snake'))   // works
console.log(list.contains('mbappe'))  // works
list.pop()
console.log(list.toString())
console.log(list.tail)

console.log('parrot index is ' + list.find('parrot'))