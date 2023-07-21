/**
 * 
 * Create a Doubly Linked List

    All of the linked lists we've created so far are singly linked lists. Here, we'll create a doubly linked list. 
    As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.

    This allows us to traverse the list in both directions but it also requires more memory to be used because every 
    node must contain an additional reference to the previous node in the list.

    We've provided a Node object and started our DoublyLinkedList. Let's add two methods to our doubly linked list 
    called add and remove. The add method should add the given element to the list while the remove method should 
    remove all occurrences of a given element in the list.

    Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last 
    element. Also, removing any item on an empty list should return null.

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
  // Only change code below this line
  this.add = (ele) => {
    let node = new Node(ele, this.tail);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      temp.next = node;
      this.tail = node;
    }
  };
  this.remove = function (data) {
    if (this.head === null) return null;
    let tempNode = this.head;
    while (tempNode !== this.tail) {
      if (tempNode.data === data) {
        if (tempNode === this.head) {
          this.head = tempNode.next;
          tempNode.next.prev = null;
        } else {
          let prevNode = tempNode.prev;
          prevNode.next = tempNode.next;
        }
      }
      tempNode = tempNode.next;
    }
    if (tempNode.data === data) {
      this.tail = tempNode.prev;
      tempNode.prev.next = null;
    }
  };
  // Only change code above this line
};
