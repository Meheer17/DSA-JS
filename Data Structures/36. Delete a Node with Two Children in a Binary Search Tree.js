/**
 * 
 * Delete a Node with Two Children in a Binary Search Tree

    Removing nodes that have two children is the hardest case to implement. Removing a node like this produces two subtrees 
    that are no longer connected to the original tree structure. How can we reconnect them? One method is to find the smallest 
    value in the right subtree of the target node and replace the target node with this value. Selecting the replacement in 
    this way ensures that it is greater than every node in the left subtree it becomes the new parent of but also less than 
    every node in the right subtree it becomes the new parent of. Once this replacement is made the replacement node must be 
    removed from the right subtree. Even this operation is tricky because the replacement may be a leaf or it may itself be 
    the parent of a right subtree. If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the 
    right child of the target. In this case, we must replace the target value with the replacement value and make the target 
    reference the replacement's right child.

    Let's finish our remove method by handling the third case. We've provided some code again for the first two cases. Add 
    some code now to handle target nodes with two children. Any edge cases to be aware of? What if the tree has only three 
    nodes? Once you are finished this will complete our deletion operation for binary search trees. Nice job, this is a pretty 
    hard problem!

 * 
 */

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.remove = function (value) {
    if (!this.root) return null;

    // find the node
    let parent;
    let target = this.root;
    while (target && target.value !== value) {
      parent = target;
      if (target.value > value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    if (!target) return null;
    if (!(target.left && target.right)) {
      const replacement = target.right ? target.right : target.left;
      if (!parent) {
        this.root = replacement;
      } else {
        const direction = parent.left === target ? "left" : "right";
        parent[direction] = replacement;
      }
    } else {
      const newChildValue = this.findMin(target.right);
      this.remove(newChildValue);
      target.value = newChildValue;
    }
  };

  this.findMin = function (node = this.root) {
    if (!node) return null;
    return node.left ? this.findMin(node.left) : node.value;
  };
}
