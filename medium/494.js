/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let result = 0;

  function recurse(idx = 0, sum = 0) {
    if (idx === nums.length) {
      if (sum === target) result++;
      return;
    }
    recurse(idx + 1, sum + nums[idx]);
    recurse(idx + 1, sum - nums[idx]);
  }

  recurse();
  return result;
};

console.log(findTargetSumWays([1], 1));
