/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let result = arr;
  result.sort((a, b) =>
    Math.abs(a - x) < Math.abs(b - x) ||
    (Math.abs(a - x) === Math.abs(b - x) && a < b)
      ? -1
      : 1
  );

  result = result.slice(0, k);
  result.sort((a, b) => (a > b ? 1 : -1));
  return result;
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
