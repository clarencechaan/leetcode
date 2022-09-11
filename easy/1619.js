/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const sorted = arr.sort((a, b) => (a > b ? 1 : -1));
  const trimmed = sorted.slice(arr.length / 20, arr.length - arr.length / 20);
  return trimmed.reduce((sum, num) => sum + num, 0) / trimmed.length;
};

console.log(
  trimMean([
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
    3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
  ])
);
