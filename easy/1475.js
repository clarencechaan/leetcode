/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  function discountedPrice(i) {
    for (let j = i + 1; j < prices.length; j++)
      if (prices[j] <= prices[i]) return prices[i] - prices[j];
    return prices[i];
  }

  let result = [];
  for (let i = 0; i < prices.length; i++) result[i] = discountedPrice(i);
  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
