/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  function recursiveMinCost(
    idx = 0,
    prevColour = -1,
    neighbourhoods = 0,
    dp = {}
  ) {
    if ((idx >= m && neighbourhoods < target) || neighbourhoods > target)
      return Infinity;
    if (idx >= m && neighbourhoods === target) return 0;

    const str = [idx, prevColour, neighbourhoods].join(",");
    if (dp[str] >= 0) return dp[str];

    if (houses[idx] > 0) {
      if (houses[idx] !== prevColour) neighbourhoods++;
      return recursiveMinCost(idx + 1, houses[idx], neighbourhoods, dp);
    }

    let result = Infinity;
    for (let colour = 1; colour <= n; colour++) {
      const houseCost = cost[idx][colour - 1];
      result = Math.min(
        result,
        houseCost +
          recursiveMinCost(
            idx + 1,
            colour,
            neighbourhoods + (colour !== prevColour ? 1 : 0),
            dp
          )
      );
    }

    dp[str] = result;
    return result;
  }

  let result = recursiveMinCost();
  if (result === Infinity) result = -1;
  return result;
};

console.log(
  minCost(
    [0, 0, 0, 0, 0],
    [
      [1, 10],
      [10, 1],
      [10, 1],
      [1, 10],
      [5, 1],
    ],
    5,
    2,
    3
  )
);
