/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let optimalLR = [0];
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    optimalLR[i] = Math.max(optimalLR[i - 1], prices[i] - min);
    min = Math.min(prices[i], min);
  }

  let optimalRL = [];
  optimalRL[prices.length - 1] = 0;
  let max = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i--) {
    optimalRL[i] = Math.max(optimalRL[i + 1], max - prices[i]);
    max = Math.max(prices[i], max);
  }

  let result = 0;
  for (let i = 0; i < prices.length - 1; i++)
    result = Math.max(result, optimalLR[i] + optimalRL[i]);

  return result;
};

console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]));
