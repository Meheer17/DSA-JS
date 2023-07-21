/**
 * 
 * Create a Map Data Structure

    The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. 
    In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values 
    and are very common and useful data structures.

    Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure 
    than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects 
    only provide us with certain operations. What if we wanted to define custom operations? Use the Map object provided 
    here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:

      add accepts a key, value pair to add to the map.
      remove accepts a key and removes the associated key, value pair
      get accepts a key and returns the stored value
      has accepts a key and returns true if the key exists or false if it doesn't.
      values returns an array of all the values in the map
      size returns the number of items in the map
      clear empties the map
 * 
 */

var Map = function () {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value;
  };
  this.remove = (key) => {
    delete this.collection[key];
  };
  this.get = (key) => {
    return this.collection[key];
  };
  this.has = (key) => {
    if (Object.keys(this.collection).includes(key)) {
      return true;
    } else {
      return false;
    }
    return;
  };
  this.values = () => {
    return [...Object.values(this.collection)];
  };
  this.size = () => {
    return this.values().length;
  };
  this.clear = () => {
    this.collection = {};
  };
  // Only change code above this line
};

const map = new Map()
map.add('a', 1)
map.add('b', 2)
map.add('c', 3)
console.log(map.has('a'), map.has('d'), map.values(), map.size(), map.get('b'))
map.remove('b')
console.log(map)