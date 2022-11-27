/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let mins = [];
  let maxes = [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    mins.push(min);
  }

  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > max) max = prices[i];
    maxes.push(max);
  }
  maxes.reverse();

  let maxProfit = 0;
  for (let i = 0; i < mins.length; i++)
    maxProfit = Math.max(maxes[i] - mins[i], maxProfit);
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
