/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  let dp = [];

  function recurse(idx = 0) {
    if (dp[idx] !== undefined) return dp[idx];
    let result = 0;
    if (idx >= low) result++;
    if (idx + zero <= high) result += recurse(idx + zero);
    if (idx + one <= high) result += recurse(idx + one);
    result = result % (10 ** 9 + 7);
    dp[idx] = result;
    return result;
  }

  return recurse();
};

console.log(countGoodStrings(3, 3, 1, 1));
