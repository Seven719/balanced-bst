import Tree from "./bst.js";

// console.log(test.levelOrder("a"));
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

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// Test for insert method
test.insert(56);
// Test for deleteItem method
test.deleteItem(4);

prettyPrint(test.root);
// Test for find method
console.log(test.find(5));

// Test levelOrder and levelOrderRecursion error handling for callback argument
// should throw an error when uncommented
// console.log(test.levelOrder("a"));
// console.log(test.levelOrderRecursion("a"));

// Example callback function
function printNode(node) {
  console.log(node.data);
}

// Test for levelOrder method
test.levelOrder(printNode);
// Test for levelOrderRecursion method
test.levelOrderRecursion(printNode);

// Test for inOrder method
console.log("IN ORDER TRAVERSAL");
test.inOrder(printNode);
// Test for preOrder method
console.log("PRE ORDER TRAVERSAL");
test.preOrder(printNode);
// Test for postOrder method
console.log("POST ORDER TRAVERSAL");
test.postOrder(printNode);

// Test for height method
// Should log "3"
console.log("HEIGHT");
console.log(test.height(test.root));

// Test for depth method
// Should log "3"
console.log("DEPTH");
console.log(test.depth(test.find(56)));

// Test for isBalanced method
// Should return true
console.log("BALANCED?");
console.log(test.isBalanced(test.root));

// Test for rebalance method
console.log("Tree Structure Before Rebalance:");
test.insert(100);
test.insert(200);
test.insert(300);
test.insert(400);
prettyPrint(test.root);
console.log("BALANCED?");
console.log(test.isBalanced(test.root));

test.rebalance();

console.log("Tree Structure After Rebalance:");
prettyPrint(test.root);

console.log("BALANCED AFTER?");
console.log(test.isBalanced(test.root));

// DRIVER SCRIPT
function generateRandomNumbers(size) {
  const numbers = new Set();
  while (numbers.size < size) {
    numbers.add(Math.floor(Math.random() * 100));
  }
  return Array.from(numbers);
}

function createBSTFromRandomNumbers(size) {
  const randomNumbers = generateRandomNumbers(size);
  const tree = new Tree(randomNumbers);
  return tree;
}

function checkBalanceAndPrintTraversals(tree) {
  console.log("BALANCED?");
  console.log(tree.isBalanced(tree.root));

  console.log("LEVEL ORDER TRAVERSAL:");
  tree.levelOrder(printNode);

  console.log("PRE ORDER TRAVERSAL:");
  tree.preOrder(printNode);

  console.log("POST ORDER TRAVERSAL:");
  tree.postOrder(printNode);

  console.log("IN ORDER TRAVERSAL:");
  tree.inOrder(printNode);
}

function unbalanceTree(tree) {
  console.log("Adding numbers greater than 100 to unbalance the tree...");
  tree.insert(101);
  tree.insert(150);
  tree.insert(200);
  tree.insert(250);
  tree.insert(300);
}

function driverScript() {
  console.log("\n\nSTARTING DRIVER SCRIPT\n\n");
  const tree = createBSTFromRandomNumbers(10);
  checkBalanceAndPrintTraversals(tree);

  unbalanceTree(tree);
  console.log("BALANCED AFTER UNBALANCING?");
  console.log(tree.isBalanced(tree.root));

  tree.rebalance();
  console.log("BALANCED AFTER REBALANCE?");
  console.log(tree.isBalanced(tree.root));

  checkBalanceAndPrintTraversals(tree);
}

driverScript();
