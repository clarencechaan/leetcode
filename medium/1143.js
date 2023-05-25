/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let memo = [];
  for (let i = 0; i <= text1.length; i++) memo.push([]);

  function recurse(idx1 = 0, idx2 = 0) {
    if (idx1 === text1.length || idx2 === text2.length) return 0;
    if (memo[idx1][idx2] !== undefined) return memo[idx1][idx2];

    let max = 0;
    if (text1[idx1] === text2[idx2]) max = 1 + recurse(idx1 + 1, idx2 + 1);
    else max = Math.max(max, recurse(idx1 + 1, idx2), recurse(idx1, idx2 + 1));

    memo[idx1][idx2] = max;
    return max;
  }

  return recurse();
};

console.log(longestCommonSubsequence("abcde", "ace"));
