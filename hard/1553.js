/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n, dp = []) {
  if (n === 0) return 0;
  if (dp[n] >= 0) return dp[n];

  let result = Infinity;

  if (n % 3 === 0) result = Math.min(result, 1 + minDays(n / 3, dp));
  else result = Math.min(result, (n % 3) + minDays(n - (n % 3), dp));

  if (n % 2 === 0) result = Math.min(result, 1 + minDays(n / 2, dp));
  else result = Math.min(result, 1 + minDays(n - 1, dp));

  dp[n] = result;
  return result;
};

console.log(minDays(10));
