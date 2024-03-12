/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  // problem:
  // at index 0, jump from i to j where:
  //    0 <= i < j < n
  // (can only jump forward)
  // -target <= nums[j] - nums[i] <= target
  // (the difference between nums[j] and nums[i] is at most target)
  // idea:
  // recursive function that returns the maximum number of jumps from index i to reach last index

  // dp[i] === recurse(i)
  let dp = [];
  function recurse(i = 0) {
    if (i === nums.length - 1) return 0;
    if (dp[i] !== undefined) return dp[i];

    let result = -Infinity;
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[j] - nums[i]) <= target)
        result = Math.max(result, 1 + recurse(j));

    dp[i] = result;
    return result;
  }

  let result = recurse();
  return result === -Infinity ? -1 : result;
};

console.log(maximumJumps((nums = [1, 3, 6, 4, 1, 2]), (target = 0)));
