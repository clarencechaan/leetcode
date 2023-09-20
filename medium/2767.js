/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  const n = s.length;

  let powerOf5 = new Set();
  for (let i = 0; 5 ** i < 2 ** 16; i++) powerOf5.add((5 ** i).toString(2));

  let dp = [];
  function recurse(idx = 0) {
    if (idx === n) return 0;
    if (s[idx] === "0") return Infinity;
    if (dp[idx] !== undefined) return dp[idx];
    let min = Infinity;
    for (let i = idx + 1; i <= n; i++)
      if (powerOf5.has(s.substring(idx, i)))
        min = Math.min(min, 1 + recurse(i));
    dp[idx] = min;
    return min;
  }

  let result = recurse();
  return result === Infinity ? -1 : result;
};

console.log(minimumBeautifulSubstrings("1011"));
