export class Tree {
  constructor(array) {
    this.root = this.buildTree(array)
  }

  buildTree(array) {
    let sorted = [...new Set(array)].sort((a,b) => a - b)
    console.log(sorted)
    return this.buildTreeRecursive(sorted, 0, sorted.length - 1)
  }

  buildTreeRecursive(array, start, end) {
    if (start > end) return null
    let mid = Math.floor((start + end) / 2)
    let node = new Node(array[mid])

    node.left = this.buildTreeRecursive(array, start, mid - 1)
    node.right = this.buildTreeRecursive(array, mid + 1, end)
    return node
  }

  insert(value) {
    let current = this.root
    let finished = false
    while (!finished) {
      if (value === current.value) {
        console.log('this value is already in bst')
        return
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = new Node(value)
          return
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = new Node(value)
          return
        }
        current = current.right
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let tree = new Tree(array)
prettyPrint(tree.root)
console.log();
tree.insert(10)
prettyPrint(tree.root)