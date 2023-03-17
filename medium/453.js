/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = Infinity;
  let result = 0;

  for (const num of nums) min = Math.min(num, min);
  for (const num of nums) result += num - min;

  return result;
};

console.log(minMoves([1, 1, 1]));
