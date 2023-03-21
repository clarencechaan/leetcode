/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let dp = [];

  function recurse(start = 0, end = s.length - 1) {
    if (start > end) return 0;
    if (start === end) return 1;

    dp[start] = dp[start] || [];

    if (dp[start][end] === undefined)
      if (s[start] === s[end]) dp[start][end] = 2 + recurse(start + 1, end - 1);
      else
        dp[start][end] = Math.max(
          recurse(start + 1, end),
          recurse(start, end - 1)
        );

    return dp[start][end];
  }

  return recurse(0, s.length - 1);
};

console.log(longestPalindromeSubseq("a"));
