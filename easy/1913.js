/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
