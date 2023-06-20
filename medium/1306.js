/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let memo = [];
  let seen = [];

  function recurse(idx = start) {
    if (arr[idx] === 0) return true;
    if (memo[idx]) return memo[idx];
    if (seen[idx]) return false;
    seen[idx] = true;
    let result = false;
    if (idx - arr[idx] >= 0) result = result || recurse(idx - arr[idx]);
    if (idx + arr[idx] < arr.length) result = result || recurse(idx + arr[idx]);
    memo[idx] = result;
    return result;
  }

  return recurse();
};

console.log(canReach([3, 0, 2, 1, 2], 2));
