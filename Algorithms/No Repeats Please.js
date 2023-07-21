/**
 * 
 * No Repeats Please
 * 
 * Return the number of total permutations of the provided string that don't have repeated consecutive 
 * letters. Assume that all characters in the provided string are each unique. For example, aab should
 * return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them 
 * (aba and aba) don't have the same letter (in this case a) repeating.
 * 
 */

function permAlone(str) {
    let regex = /(.)\1+/;
  
    const arr = str.split("");
    const permutations = [];
    let tmp;
  
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    function swap(index1, index2) {
      tmp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = tmp;
    }
  
    function generate(int) {
      if (int === 1) {
        permutations.push(arr.join(""));
      } else {
        for (let i = 0; i != int; ++i) {
          generate(int - 1);
          swap(int % 2 ? 0 : i, int - 1);
        }
      }
    }
  
    generate(arr.length);
  
    const filtered = permutations.filter(function(string) {
      return !string.match(regex);
    });
  
    return filtered.length;
  }
  permAlone("aab");