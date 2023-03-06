/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let dp = Array(target + 1).fill(0);

  for (let i = 0; i <= target; i++) {
    for (const num of nums) {
      if (num > i) break;
      if (num === i) dp[i]++;
      dp[i] += dp[i - num];
    }
  }

  return dp[dp.length - 1];
};

console.log(combinationSum4([1, 2, 3], 4));
