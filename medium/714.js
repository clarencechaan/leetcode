/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp = [];
  for (let i = 0; i < prices.length; i++) dp.push([]);

  function recurse(idx = 0, holding = 0) {
    if (idx >= prices.length) return 0;
    if (dp[idx][holding] !== undefined) return dp[idx][holding];

    let profit;
    if (holding)
      profit = Math.max(
        0,
        recurse(idx + 1, 1),
        prices[idx] - fee + recurse(idx + 1, 0)
      );
    else
      profit = Math.max(
        0,
        recurse(idx + 1, 0),
        -prices[idx] + recurse(idx + 1, 1)
      );

    dp[idx][holding] = profit;
    return profit;
  }

  return recurse();
};

console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
