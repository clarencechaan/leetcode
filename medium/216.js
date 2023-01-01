/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];

  function recurse(k, n, i = 0, arr = []) {
    if (k === 0 && n === 0) {
      result.push(arr);
      return;
    }
    if (n <= 0) return;

    for (i++; i <= 9; i++) recurse(k - 1, n - i, i, [...arr, i]);
  }

  recurse(k, n);
  return result;
};

console.log(combinationSum3(4, 1));
