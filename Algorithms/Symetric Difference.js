/**
 * 
 *  Find the Symmetric Difference
 * 
 *  The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two 
 *  sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 *  Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression 
 *  involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for 
 *  sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 * 
 */

// We Can Use The Same Logic In Python.

function check(){
    const count = {}
    var sets = []
    for (let i = 0; i < arguments.length; i++){
      var list = []
      for (let j = 0; j < arguments[i].length; j++){
        if(count.hasOwnProperty(arguments[i][j])){  
          if(!(list.includes(arguments[i][j]))){
            count[arguments[i][j]] += 1
          }
        } else {
          list.push(arguments[i][j])
          count[arguments[i][j]] = 1
        }
      }
    }
    const countdata = Object.keys(count)
    for (let x = 0; x < countdata.length; x++){
      if(count[countdata[x]]==1){
        sets.push(parseInt(countdata[x]))
      }
    }
    console.log(sets)
    return sets;
  }
  
function sym() {
    var list = []
    for(let i = 0; i < arguments.length; i++){
      list.push(arguments[i])
    }
    while (list.length > 1) {
      var data = list.splice(0,2)
      list.unshift(check(data[0], data[1]))
    }
    return list[0]
  }
  
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

// MY CODES ABOVE THIS

// SOL - 1

function sym() {
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function symDiff(arrayOne, arrayTwo) {
    const result = [];

    arrayOne.forEach(function (item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function (item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}

// SOL - 2

function sym(...args) {
  // Return the symmetric difference of 2 arrays
  const getDiff = (arr1, arr2) => {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(item => arr2.indexOf(item) === -1);
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  const summary = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  const unique = summary.filter((elem, index, arr) => index === arr.indexOf(elem));
  return unique;
}

// SOL - 3

const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

// test here
sym([1, 2, 3], [5, 2, 1, 4]);