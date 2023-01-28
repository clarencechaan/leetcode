/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;

  for (let i = 1; i < nums.length; i++)
    if (nums[i - 1] >= nums[i]) {
      operations += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }

  return operations;
};

console.log(minOperations([8]));
