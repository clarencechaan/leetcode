/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];

  (function recurse(num = 1, arr = []) {
    if (arr.length === k) result.push(arr);
    else for (let i = num; i <= n; i++) recurse(i + 1, [...arr, i]);
  })();

  return result;
};

console.log(combine(6, 3));
