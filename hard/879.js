/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  // n: max number of participants
  // goal is to count the number of subsequences of group such that the sum of participants at these indices is <= `n`
  // and the sum of profit at these indices is >= `minProfit`

  // idea:
  // 1. create a helper function profitableSchemesRecursive(n, minProfit, idx) that returns the number of profitable schemes
  //    with the number of participants <= n, and the total profit >= minProfit, using only indices that are >= idx;
  // 2. return profitableSchemesRecursive(n, minProfit, 0)

  const memo = new Array(n + 1)
    .fill()
    .map(() => new Array(minProfit + 1).fill().map(() => []));
  function profitableSchemesRecursive(n, minProfit, idx) {
    if (n < 0) return 0;
    if (idx >= group.length) return minProfit <= 0 ? 1 : 0;
    if (memo[n][minProfit][idx] !== undefined) return memo[n][minProfit][idx];
    const notTake = profitableSchemesRecursive(n, minProfit, idx + 1);
    const take = profitableSchemesRecursive(
      n - group[idx],
      Math.max(0, minProfit - profit[idx]),
      idx + 1
    );
    const result = (notTake + take) % (10 ** 9 + 7);
    memo[n][minProfit][idx] = result;
    return result;
  }

  return profitableSchemesRecursive(n, minProfit, 0);
};

console.log(profitableSchemes(5, 3, [2, 2], [2, 3]));
