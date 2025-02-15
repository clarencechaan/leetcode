/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  let min = Infinity;
  for (let i = 1; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      min = Math.min(min, nums[0] + nums[i] + nums[j]);
  return min;
};
