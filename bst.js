import Node from "./node.js";

export default class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const middle = Math.floor(array.length / 2);

    const node = new Node(array[middle]);

    node.left = this.buildTree(array.slice(0, middle));
    node.right = this.buildTree(array.slice(middle + 1));

    return node;
  }
}
