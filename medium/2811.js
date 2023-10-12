/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
  if (nums.length <= 2) return true;
  for (let i = 1; i < nums.length; i++)
    if (nums[i - 1] + nums[i] >= m) return true;
  return false;
};

console.log(canSplitArray([2, 2, 1], 4));
