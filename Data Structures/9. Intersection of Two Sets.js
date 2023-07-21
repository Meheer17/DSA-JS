/**
 * 
 * Intersection on Two Sets of Data
 * 
    In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set 
    data structure called intersection. An intersection of sets represents all values that are common to two or more sets. 
    This method should take another Set as an argument and return the intersection of the two sets.

    For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: 
    setA.intersection(setB) = ['a', 'b'].

 * 
 */

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // Only change code below this line
  intersection(set) {
    const newSet = new Set();
    this.values().forEach((val) => {
      if (set.values().includes(val)) {
        newSet.add(val);
      }
    });
    return newSet;
  }
  // Only change code above this line
}


const sets = new Set();
sets.add(1);
sets.add(2);
sets.add(3);
sets.add(4);

const se = new Set();
se.add(5);
se.add(6);
se.add(2);

console.log(sets.intersection(se))