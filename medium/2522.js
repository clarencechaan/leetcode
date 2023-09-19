/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  let dp = [];
  function recurse(idx = 0) {
    if (idx >= s.length) return 0;
    if (dp[idx]) return dp[idx];
    let min = Infinity;
    for (let i = idx + 1; i <= s.length && s.substring(idx, i) <= k; i++)
      min = Math.min(min, 1 + recurse(i));
    dp[idx] = min;
    return min;
  }

  let result = recurse();
  if (result === Infinity) return -1;
  else return result;
};

console.log(minimumPartition("165462", 60));
