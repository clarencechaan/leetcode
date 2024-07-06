/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function (m, n, prices) {
  const priceMap = [];
  for (const [h, w, p] of prices) {
    if (!priceMap[h]) priceMap[h] = [];
    priceMap[h][w] = p;
  }

  const dp = Array(m + 1)
    .fill()
    .map(() => []);
  function getMoney(h = m, w = n) {
    if (dp[h][w] >= 0) return dp[h][w];

    const sell = priceMap[h]?.[w] || 0;
    let horizontalCut = 0;

    for (let i = 1; i <= h / 2; i++)
      horizontalCut = Math.max(
        horizontalCut,
        getMoney(i, w) + getMoney(h - i, w)
      );

    let verticalCut = 0;
    for (let i = 1; i <= w / 2; i++)
      verticalCut = Math.max(verticalCut, getMoney(h, i) + getMoney(h, w - i));

    const result = Math.max(horizontalCut, verticalCut, sell);
    dp[h][w] = result;
    return result;
  }

  return getMoney();
};

console.log(
  sellingWood(3, 5, [
    [1, 4, 2],
    [2, 2, 7],
    [2, 1, 3],
  ])
);
