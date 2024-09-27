/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => (a > b ? 1 : -1));
  if (prices[0] + prices[1] <= money) return money - prices[0] - prices[1];
  return money;
};

console.log(buyChoco([1, 2, 2], 3));
