/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = [-prices[0]];
  let sell = [0];

  for (let i = 1; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], (sell[i - 2] || 0) - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return Math.max(buy[buy.length - 1], sell[sell.length - 1]);
};

console.log(maxProfit([2, 4, 1, 7, 11]));
