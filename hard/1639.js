/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const maxWordLength = words.reduce(
    (max, word) => Math.max(max, word.length),
    0
  );

  // return the number of ways to create the substring of `target` starting at
  // index `i` and using only indices in words at or to the right of `j`
  function recursiveNumWays(
    i = 0,
    j = 0,
    dp = Array(target.length)
      .fill()
      .map(() => [])
  ) {
    if (i >= target.length) return 1;
    if (target.length - i > maxWordLength - j) return 0;
    if (dp[i][j] >= 0) return dp[i][j];
    let result = 0;
    for (const word of words)
      if (target[i] === word[j]) result += recursiveNumWays(i + 1, j + 1, dp);
    result += recursiveNumWays(i, j + 1, dp);
    result %= 10 ** 9 + 7;
    dp[i][j] = result;
    return result;
  }

  return recursiveNumWays();
};

console.log(numWays(["acca", "bbbb", "caca"], "aba"));
