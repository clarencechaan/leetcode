/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function (n, offers) {
  // create recursive helper function

  const houseOfferMap = {};
  for (const offer of offers) {
    const start = offer[0];
    if (!houseOfferMap[start]) houseOfferMap[start] = [];
    houseOfferMap[start].push(offer);
  }

  const dp = Array(n).fill(-1);
  // returns the max profit from `house` to `n`
  function recursiveMaximizeProfit(house = 0) {
    if (house >= n) return 0;
    if (dp[house] >= 0) return dp[house];
    if (!houseOfferMap[house]) return recursiveMaximizeProfit(house + 1);
    const offersAtHouse = houseOfferMap[house];
    let result = 0;
    for (const [, end, gold] of offersAtHouse)
      result = Math.max(result, gold + recursiveMaximizeProfit(end + 1));
    result = Math.max(result, recursiveMaximizeProfit(house + 1));
    dp[house] = result;
    return result;
  }

  return recursiveMaximizeProfit();
};

console.log(
  maximizeTheProfit(5, [
    [0, 0, 1],
    [0, 2, 2],
    [1, 3, 2],
  ])
);
