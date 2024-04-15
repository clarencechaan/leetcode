/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  function recursiveMaxCoins(
    left = 0,
    right = nums.length,
    dp = Array(nums.length + 1)
      .fill()
      .map(() => [])
  ) {
    if (dp[left][right] >= 0) return dp[left][right];
    let result = 0;
    for (let i = left; i < right; i++) {
      const balloon = nums[i];
      const leftPart = recursiveMaxCoins(left, i, dp);
      const rightPart = recursiveMaxCoins(i + 1, right, dp);
      const coins =
        leftPart +
        (nums[left - 1] || 1) * balloon * (nums[right] || 1) +
        rightPart;
      result = Math.max(result, coins);
    }

    dp[left][right] = result;
    return result;
  }

  return recursiveMaxCoins();
};

console.log(maxCoins([3, 1, 5, 8]));
