/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function (n) {
  function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  }

  const dp = Array(7)
    .fill()
    .map(() =>
      Array(7)
        .fill()
        .map(() => [])
    );

  function recursion(prevRoll1 = null, prevRoll2 = null, length = 0) {
    if (length >= n) return 1;

    if (length >= 2 && dp[prevRoll1][prevRoll2][length] >= 0)
      return dp[prevRoll1][prevRoll2][length];

    let result = 0;
    for (let roll = 1; roll <= 6; roll++) {
      if (prevRoll1 && gcd(roll, prevRoll1) !== 1) continue;
      if (prevRoll1 === roll || prevRoll2 === roll) continue;
      result += recursion(roll, prevRoll1, length + 1);
    }

    result %= 10 ** 9 + 7;
    if (length >= 2) dp[prevRoll1][prevRoll2][length] = result;
    return result;
  }

  return recursion();
};

console.log(distinctSequences(4));
