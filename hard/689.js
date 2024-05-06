/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  // create a running sum array
  const runningSum = [];
  for (let i = 0; i < nums.length; i++)
    runningSum[i] = (runningSum[i - 1] || 0) + nums[i];

  // create subarray sum array
  const subarraySum = [];
  for (let i = 0; i <= nums.length - k; i++)
    subarraySum[i] = runningSum[i + k - 1] - (runningSum[i - 1] || 0);

  // returns the sum of the subarrays starting from indices `subarrayIndices`
  function getSum(subarrayIndices) {
    return subarrayIndices.reduce((sum, idx) => subarraySum[idx] + sum, 0);
  }

  // recursive helper function
  // returns the indices of `remaining` subarrays with maximum sum, including
  // only indices >= `idx`
  function recursion(idx = 0, remaining = 3, dp = [, [], [], []]) {
    if (remaining <= 0 || idx >= subarraySum.length) return [];
    if (dp[remaining][idx]) return dp[remaining][idx];

    const skip = recursion(idx + 1, remaining, dp);
    const take = [idx, ...recursion(idx + k, remaining - 1, dp)];
    const result =
      skip.length < remaining || getSum(take) >= getSum(skip) ? take : skip;

    dp[remaining][idx] = result;

    return result;
  }

  return recursion();
};

console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2));
