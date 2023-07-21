/**
 * 
 * Reverse a Doubly Linked List

    Let's create one more method for our doubly linked list called reverse which reverses the list in place. 
    Once the method is executed the head should point to the previous tail and the tail should point to the 
    previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order 
    compared to the original list. Trying to reverse an empty list should return null.

 * 
 */

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function (element) {
    let node = new Node(element, this.tail);
    let currentNode = this.head;
    let previousNode;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.prev = currentNode;
      currentNode.next = node;
      this.tail = node;
    }
  };
  this.reverse = function () {
    let temp = null;
    let currentNode = this.head;

    if (this.head === null) {
      return null;
    }

    this.tail = currentNode;
    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
    }
  };
  // change code above this line
};
