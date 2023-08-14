/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let memo = [];
  for (let i = 0; i < prices.length; i++) memo.push([]);

  function recurse(idx = 0, rem = k) {
    if (rem <= 0 || idx >= prices.length) return 0;
    if (memo[idx][rem] !== undefined) return memo[idx][rem];
    let result = 0;
    let min = prices[idx];
    let profit = 0;
    for (let i = idx + 1; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      if (prices[i] - min > profit) {
        profit = prices[i] - min;
        result = Math.max(result, profit + recurse(i + 1, rem - 1));
      }
    }
    memo[idx][rem] = result;
    return result;
  }

  return recurse();
};

console.log(maxProfit(2, [2, 4, 1]));
