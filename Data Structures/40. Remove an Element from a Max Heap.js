/**
 * 
 * Remove an Element from a Max Heap

    Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting elements both require similar 
    logic. In a max heap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our 
    tree. This will break the heap property of our tree, so we must reestablish it in some way. Typically, for a max heap this is done 
    in the following way:

        Move the last element in the heap into the root position.
        If either child of the root is greater than it, swap the root with the child of greater value.
        Continue swapping until the parent is greater than both children or you reach the last level in the tree.

    Instructions: Add a method to our max heap called remove. This method should return the greatest value that has been added to our 
    max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, 
    the next greatest element remaining in the heap should become the root.

 * 
 */

var MaxHeap = function () {
  // change code below this line
  this.arr = [null];

  this.insert = function (val) {
    this.arr.push(val);
    let i = this.arr.length - 1;
    let parentIndex = Math.floor(i / 2);
    // console.log(`---i: ${i}`)
    // console.log(`p: ${parentIndex}`)
    while (parentIndex > 0 && this.arr[i] > this.arr[parentIndex]) {
      // console.log(`Swapping bc ${this.arr[i]} > ${this.arr[parentIndex]}`)
      let temp = this.arr[i];
      this.arr[i] = this.arr[parentIndex];
      this.arr[parentIndex] = temp;
      i = parentIndex;
      parentIndex = Math.floor(i / 2);
      // console.log(`New i: ${i}`);
    }
  };
  this.remove = function () {
    let valueToRemove = this.arr[1];
    let lastVal = this.arr.pop();
    let length = this.arr.length;
    // console.log(`Array length:${length}`);

    let i = 1; // pointer to the moving value
    this.arr[i] = lastVal;

    let iIsNotLastLevel = this.arr[2 * i] !== undefined;
    let parentIsSmallerThanChildren =
      this.arr[i] < this.arr[2 * i] || this.arr[i] < this.arr[2 * i + 1];
    while (iIsNotLastLevel && parentIsSmallerThanChildren) {
      // console.log(`--iIsNotLastLevel: ${iIsNotLastLevel}`);
      console.log(`\ni:${i} | ${this.arr}`);

      if (this.arr[2 * i] > this.arr[2 * i + 1]) {
        console.log(
          `Left child is bigger than right: ${this.arr[2 * i]} > ${
            this.arr[2 * i + 1]
          }`
        );
        let temp = this.arr[2 * i];
        this.arr[2 * i] = this.arr[i];
        this.arr[i] = temp;
        i = 2 * i;
      } else {
        console.log(
          `Left child is smaller than right: ${this.arr[2 * i]} < ${
            this.arr[2 * i + 1]
          }`
        );
        let temp = this.arr[2 * i + 1];
        this.arr[2 * i + 1] = this.arr[i];
        this.arr[i] = temp;
        i = 2 * i + 1;
      }
      console.log(`New i:${i} | ${this.arr}`);

      iIsNotLastLevel = this.arr[2 * i] !== undefined;
      // console.log(`-iIsNotLastLevel: ${iIsNotLastLevel}`);
      parentIsSmallerThanChildren =
        this.arr[i] < this.arr[2 * i] || this.arr[i] < this.arr[2 * i + 1];
      // console.log(`-parentIsSmallerThanChildren: ${parentIsSmallerThanChildren}`);
    }
    // console.log(`Returning ${valueToRemove}`)
    return valueToRemove;
  };
  this.print = function () {
    console.log(this.arr);
    return this.arr;
  };
  // change code above this line
};

let mh = new MaxHeap();
// mh.insert(5);
// mh.insert(3);
// mh.insert(7);
// mh.insert(9);
for (let index = 7; index > 1; index--) {
  const element = index;
  mh.insert(element);
}
mh.print();
mh.remove();
mh.print();
