/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  // 1. create a recursive helper function recursiveNumWays(idx, remainingSteps) that returns the number of ways to reach
  //    index 0 from index `idx` after `remainingSteps` steps

  function recursiveNumWays(
    idx = 0,
    remainingSteps = steps,
    dp = Array(remainingSteps + 1)
      .fill()
      .map(() => [])
  ) {
    if (idx > remainingSteps || idx >= arrLen || idx < 0) return 0;
    if (idx === 0 && remainingSteps === 0) return 1;
    if (dp[remainingSteps][idx] >= 0) return dp[remainingSteps][idx];
    const result =
      (recursiveNumWays(idx - 1, remainingSteps - 1, dp) +
        recursiveNumWays(idx, remainingSteps - 1, dp) +
        recursiveNumWays(idx + 1, remainingSteps - 1, dp)) %
      (10 ** 9 + 7);
    dp[remainingSteps][idx] = result;
    return result;
  }

  return recursiveNumWays();
};

console.log(numWays(3, 2));
