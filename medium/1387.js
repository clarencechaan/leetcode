/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  let dp = {};

  function power(x) {
    if (dp[x] !== undefined) return dp[x];
    let steps;
    if (x === 1) steps = 0;
    else if (x % 2 === 0) steps = 1 + power(x / 2);
    else steps = 1 + power(3 * x + 1);
    dp[x] = steps;
    return steps;
  }

  for (let i = lo; i <= hi; i++) power(i);

  let entries = Object.entries(dp)
    .filter(([a]) => lo <= a && a <= hi)
    .map(([a, b]) => [parseInt(a), b]);
  entries.sort(
    (a, b) => a[1] > b[1] || (a[1] === b[1] && a[0] > b[0] ? 1 : -1)
  );

  return entries[k - 1][0];
};

console.log(getKth(12, 15, 2));
