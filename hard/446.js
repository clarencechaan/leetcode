/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const dp = Array(nums.length)
    .fill()
    .map(() => []);

  // returns the number of arithmetic subsequences given at least two elements
  // whose difference is equal to `diff` has already been found and the index of
  // the last element found is `idx`
  function recursion(idx, diff) {
    if (idx >= nums.length) return 0;
    if (dp[idx][diff] >= 0) return dp[idx][diff];

    let count = 0;
    for (let i = idx + 1; i < nums.length; i++)
      if (nums[i] - nums[idx] === diff) count += 1 + recursion(i, diff);

    dp[idx][diff] = count;

    return count;
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      result += recursion(j, nums[j] - nums[i]);

  return result;
};

console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]));
