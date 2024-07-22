import { LinkedList } from "./linked-lists.mjs"

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const knightMoves = (start, end) => {
  let result = new LinkedList()
  result.append(start)
  BFS([start], end, result)
  return result


}

const possibleMoves = (cell) => {
  const X = cell[0]
  const Y = cell[1]
  let result = []
  if (X - 1 >= 0) {
    if (Y + 2 < 8) result.push(new Node([X - 1, Y + 2]))
    if (Y - 2 >= 0) result.push(new Node([X - 1, Y - 2]))
    if (X - 2 >= 0) {
      if (Y + 1 < 8) result.push(new Node([X - 2, Y + 1]))
      if (Y - 1 >= 0) result.push(new Node([X - 2, Y - 1]))
    }
  }
  if (X + 1 < 8) {
    if (Y + 2 < 8) result.push(new Node([X + 1, Y + 2]))
    if (Y - 2 >= 0) result.push(new Node([X + 1, Y - 2]))
    if (X + 2 < 8) {
      if (Y + 1 < 8) result.push(new Node([X + 2, Y + 1]))
      if (Y - 1 >= 0) result.push(new Node([X + 2, Y - 1]))
    }
  }
  return result
}

const BFS = (list, end, path) => {
  for (let entry of list) {
    if (entry === end) {
      // path.append(entry)
      return path
    }
    // BFS(possibleMoves(entry), end, path)
  }
  for (let entry of list) {
    path.pop()
    path.append(entry)
    BFS(possibleMoves(entry), end, path)
  }
}

let test = knightMoves([0,0],[3,3])
console.log(test)
console.log(test.toString())