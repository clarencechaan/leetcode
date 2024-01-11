/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let sum = 0;
  let min = 0;
  let max = 0;
  for (const num of nums) {
    sum += num;
    min = Math.min(min, sum);
    max = Math.max(max, sum);
  }
  return max - min;
};

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));
