/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  let sum = nums.reduce((sum, num) => sum + num, 0);

  for (const num of nums) {
    sum -= num;
    if (num < sum) return sum + num;
  }

  return -1;
};

console.log(largestPerimeter([5, 5, 5]));
