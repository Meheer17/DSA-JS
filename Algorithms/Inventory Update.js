/**
 * 
 * Inventory Update
 * 
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
 * Update the current existing inventory item quantities (in arr1). If an item cannot be found, add 
 * the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 * 
 */

function updateInventory(arr1, arr2) {
    const finarr = []
    const itemdict = {}
    const mainList = arr1.concat(arr2)
    for(let i = 0; i < mainList.length; i++){
        if (itemdict.hasOwnProperty(mainList[i][1])){
            itemdict[mainList[i][1]] += mainList[i][0]
        } else {
            itemdict[mainList[i][1]] = mainList[i][0]
        }
    }
    var data = Object.keys(itemdict).sort()
    for(let i = 0; i < data.length; i++){
        finarr.push([itemdict[data[i]],data[i]])
    }
    console.log(finarr)
    return finarr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

// MY CODE ABOVE THIS

// SOL - 1

function updateInventory(arr1, arr2) {
    // Variable for location of product
    var index;
  
    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function(name) {
      for (var i = 0; i < this.length; i++) {
        if (this[i][1] === name) {
          return i;
        }
      }
      return undefined;
    };
  
    // For each item of the new Inventory
    for (var i = 0; i < arr2.length; i++) {
      // Invoke our helper function using arr1 as this
      index = getProductIndex.call(arr1, arr2[i][1]);
  
      // If the item doesn't exist
      if (index === undefined) {
        // Push the entire item
        arr1.push(arr2[i]);
      } else {
        // Add the new quantity of the current item
        arr1[index][0] += arr2[i][0];
      }
    }
  
    // Sort alphabetically, by the product name of each item
    arr1.sort(function(a, b) {
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[1] < b[1]) {
        return -1;
      }
      return 0;
    });
  
    return arr1;
  }
  
  // test here
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  updateInventory(curInv, newInv);

// SOL - 2

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    var index;
    var arrCurInvName = []; // Names of arr1's items
    var arrNeInvName = []; // Names of arr2's items
  
    // Same as using two for loops, this takes care of increasing the number of stock quantity.
    arr1.forEach(function(item1) {
      arr2.forEach(function(item2) {
        if (item1[1] === item2[1]) {
          item1[0] = item1[0] + item2[0]; //Increase number of stock
        }
      });
    });
  
    // Get item's name for new Inventory
    arr2.forEach(function(item) {
      arrNeInvName.push(item[1]);
    });
  
    // Get item's name for Current Inventory
    arr1.forEach(function(item) {
      arrCurInvName.push(item[1]);
    });
  
    // Add new inventory items to current inventory.
    arrNeInvName.forEach(function(item) {
      if (arrCurInvName.indexOf(item) === -1) {
        index = arrNeInvName.indexOf(item);
        arr1.push(arr2[index]);
      }
    });
  
    // Sort the array alphabetically using the second element of the array as base.
    arr1.sort(function(currItem, nextItem) {
      //Ternary function to avoid using if else
      return currItem[1] > nextItem[1] ? 1 : -1;
    });
  
    return arr1;
  }
  
  // test here
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);

// SOL - 3
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    // convert current inventory (arr1) to an one-dimensional array
    const inventory = Array.prototype.concat.apply([], arr1);
  
    // loop through new delivery (arr2)
    for (let i = 0; i < arr2.length; i++) {
      // extract item properties for easy reference
      const item = arr2[i][1];
      const quantity = arr2[i][0];
  
      // check if item already exists in inventory
      const position = inventory.indexOf(item);
  
      // exsisting item: update quantity
      if (position !== -1) {
        const row = Math.floor(position / 2);
        arr1[row][0] += quantity;
        continue;
      }
  
      // alien item: add to inventory
      arr1.push([quantity, item]);
    }
  
    // sort inventory in alphabetical order
    arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));
  
    return arr1;
  }
  
  // test here
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);