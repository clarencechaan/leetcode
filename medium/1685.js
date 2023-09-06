/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let result = [0];
  for (let i = 1; i < nums.length; i++) result[0] += nums[i] - nums[0];
  for (let i = 1; i < nums.length; i++)
    result[i] = result[i - 1] + (2 * i - nums.length) * (nums[i] - nums[i - 1]);
  return result;
};

console.log(getSumAbsoluteDifferences([2, 3, 5]));
