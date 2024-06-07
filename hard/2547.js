/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function (nums, k) {
  const n = nums.length;
  const costArr = Array(n)
    .fill()
    .map(() => []);

  for (let left = 0; left < n; left++) {
    const freq = {};
    let cost = k;
    for (let right = left; right < n; right++) {
      freq[nums[right]] = (freq[nums[right]] || 0) + 1;
      if (freq[nums[right]] === 2) cost += 2;
      else if (freq[nums[right]] > 2) cost++;
      costArr[left][right] = cost;
    }
  }

  const dp = [];
  function recursion(idx = 0) {
    if (idx >= n) return 0;
    if (dp[idx] >= 0) return dp[idx];

    let result = Infinity;
    for (let i = idx; i < n; i++)
      result = Math.min(result, costArr[idx][i] + recursion(i + 1));
    dp[idx] = result;

    return result;
  }

  return recursion();
};

console.log(minCost([1, 2, 1, 2, 1, 3, 3], 2));
