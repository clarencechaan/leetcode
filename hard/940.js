/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const dp = [];
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    if (!charSet.has(s[i])) {
      charSet.add(s[i]);
      count++;
    }

    let j = i;
    while (j >= 0 && (s[j] !== s[i] || j === i)) {
      j--;
      count += dp[j] || 0;
    }

    count %= 10 ** 9 + 7;
    dp[i] = count;
  }

  return dp.reduce((sum, num) => sum + num, 0) % (10 ** 9 + 7);
};

console.log(distinctSubseqII("abc"));
