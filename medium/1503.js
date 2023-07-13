/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let max = 0;
  for (const idx of left) max = Math.max(max, idx);
  for (const idx of right) max = Math.max(max, n - idx);
  return max;
};

console.log(getLastMoment(4, [4, 3], [0, 1]));
