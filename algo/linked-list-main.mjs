import { LinkedList, Node } from "./linked-lists.mjs";

const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list)
console.log(list.toString())