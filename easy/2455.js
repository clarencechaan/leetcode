/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  nums = nums.filter((num) => num % 2 === 0 && num % 3 === 0);
  return Math.floor(nums.reduce((sum, num) => sum + num, 0) / nums.length) || 0;
};
