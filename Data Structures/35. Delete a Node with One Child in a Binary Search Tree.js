/**
 * 
 * Delete a Node with One Child in a Binary Search Tree

    Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child. For this case, 
    say we have a tree with the following nodes 1 — 2 — 3 where 1 is the root. To delete 2, we simply need to make the 
    right reference in 1 point to 3. More generally to delete a node with only one child, we make that node's parent 
    reference the next node in the tree.

    We've provided some code in our remove method that accomplishes the tasks from the last challenge. We find the target 
    to delete and its parent and define the number of children the target node has. Let's add the next case here for 
    target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in 
    the tree and then set the correct reference in the parent to point to this node. In addition, let's account for 
    the case where the target is the root node (this means the parent node will be null). Feel free to replace all 
    the starter code with your own as long as it passes the tests.

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
    let prev;
    let curr = this.root;
    while (curr && curr.value !== value) {
      prev = curr;
      if (curr.value > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    if (!curr) return null;
    const repl = curr.right ? curr.right : curr.left;
    if (!prev) {
      this.root = repl;
    } else {
      const direction = prev.left === curr ? "left" : "right";
      prev[direction] = repl;
    }
  };
}
