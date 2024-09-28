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

  insert(value, node = this.root) {
    if (node === null) return new Node(value);
    if (node.data === value) return;

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (node === null) return node;

    if (node.data > value) {
      node.left = this.deleteItem(value, node.left);
    } else if (node.data < value) {
      node.right = this.deleteItem(value, node.right);
    } else {
      node = this._removeNode(node);
    }

    return node;
  }

  _removeNode(node) {
    if (node.left === null) return node.right;
    if (node.right === null) return node.left;

    let successor = this._getSuccessor(node.right);
    node.data = successor.data;
    node.right = this.deleteItem(successor.data, node.right);

    return node;
  }

  _getSuccessor(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  find(value, node = this.root) {
    if (node === null || node.data === value) return node;

    return value < node.data
      ? this.find(value, node.left)
      : this.find(value, node.right);
  }
}
