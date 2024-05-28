/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => (a > b ? 1 : -1));

  const dp = Array(satisfaction.length)
    .fill()
    .map(() => []);

  function recursion(idx = 0, time = 1) {
    if (idx >= satisfaction.length) return 0;
    if (dp[idx][time] !== undefined) return dp[idx][time];

    const take = satisfaction[idx] * time + recursion(idx + 1, time + 1);
    const skip = recursion(idx + 1, time);

    const result = Math.max(take, skip);
    dp[idx][time] = result;
    return result;
  }

  return recursion();
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
