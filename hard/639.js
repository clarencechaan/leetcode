/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const numWays = { "1*": 9, "2*": 6, "*": 9, "**": 15 };
  for (let i = 1; i <= 26; i++) numWays[i] = 1;
  for (let i = 0; i <= 6; i++) numWays["*" + i] = 2;
  for (let i = 7; i <= 9; i++) numWays["*" + i] = 1;

  const dp = [];
  function recursion(idx = 0) {
    if (idx >= s.length) return 1;
    if (dp[idx] >= 0) return dp[idx];

    const char1 = s[idx];
    const char2 = s[idx + 1] || "";

    let result = (numWays[char1] || 0) * recursion(idx + 1);
    if (char2) result += (numWays[char1 + char2] || 0) * recursion(idx + 2);

    result %= 10 ** 9 + 7;

    dp[idx] = result;
    return result;
  }

  return recursion();
};

console.log(numDecodings("*"));
