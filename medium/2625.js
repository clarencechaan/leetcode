/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // solve with recursive helper function

  function recursiveFlat(arr, n) {
    if (n === 0) return arr; // Passing a depth of n=0 will always result in the original array
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number")
        result.push(arr[i]); // can't flatten any further
      else result.push(...recursiveFlat(arr[i], n - 1)); // push the flattened array at arr[i]
    }
    return result;
  }

  return recursiveFlat(arr, n);
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
