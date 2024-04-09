/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 1. create a recursive helper function recursiveMinDistance(idx1, idx2) that returns the minimum number of operations to make
  //    word1 starting from idx1 equal to word2 starting from idx2

  function recursiveMinDistance(
    idx1 = 0,
    idx2 = 0,
    dp = new Array(word1.length).fill().map(() => [])
  ) {
    if (idx1 >= word1.length || idx2 >= word2.length)
      return word1.length - idx1 + word2.length - idx2;

    if (dp[idx1][idx2] >= 0) return dp[idx1][idx2];

    // character is same: no operation
    if (word1[idx1] === word2[idx2])
      return recursiveMinDistance(idx1 + 1, idx2 + 1, dp);

    // delete: 1 operation
    const del = 1 + recursiveMinDistance(idx1 + 1, idx2, dp);

    // replace: 1 operation
    const repl = 1 + recursiveMinDistance(idx1 + 1, idx2 + 1, dp);

    // insert: 1 operation
    const ins = 1 + recursiveMinDistance(idx1, idx2 + 1, dp);

    const result = Math.min(del, repl, ins);
    dp[idx1][idx2] = result;
    return result;
  }

  return recursiveMinDistance();
};

console.log(minDistance("horse", "ros"));
