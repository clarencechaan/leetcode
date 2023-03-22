/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins)
    for (let i = coin; i < dp.length; i++) dp[i] += dp[i - coin];

  return dp[amount];
};

console.log(change(20, [1, 2, 5]));
