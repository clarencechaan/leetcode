/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  return (nums[0] - 1) * (nums[1] - 1);
};
