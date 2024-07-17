export class Tree {
  constructor(array) {
    this.root = new Node(null)
  }

  buildTree(array) {
    let sorted = Array.from(new Set(array)).sort()
    function actualBuild() {
      if (!array) return null
      const mid = Math.floor(sorted.length / 2)
      this.root.value = sorted[mid]
      this.root.left = this.buildTree(sorted.slice(0, mid))
      this.root.right = this.buildTree(sorted.slice(mid))
      return this.root
    }
    actualBuild()
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
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let tree = new Tree(array)
tree.buildTree(array)
prettyPrint(tree.root)
console.log(tree.root)