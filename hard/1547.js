/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  cuts.push(0, n);
  cuts.sort((a, b) => (a > b ? 1 : -1));

  const dp = Array(cuts.length)
    .fill()
    .map(() => []);
  function recursion(idx1 = 0, idx2 = cuts.length - 1) {
    if (idx2 - idx1 <= 1) return 0;
    if (dp[idx1][idx2] >= 0) return dp[idx1][idx2];

    const length = cuts[idx2] - cuts[idx1];

    let result = Infinity;
    for (let i = idx1 + 1; i < idx2; i++)
      result = Math.min(
        result,
        length + recursion(idx1, i) + recursion(i, idx2)
      );

    dp[idx1][idx2] = result;
    return result;
  }

  return recursion();
};

console.log(minCost(7, [1, 3, 4, 5]));
