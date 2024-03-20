/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  // idea:
  // 1. create a helper function minExtraCharRecursive(idx) that returns the minimum number of extra characters left over after breaking up
  //    the string s from index idx to the end of the string
  // 2. return minExtraCharRecursive(0)

  const dictSet = new Set(dictionary);

  function minExtraCharRecursive(idx, dp = []) {
    if (idx === s.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
    let result = s.length - idx; // worst case, we can't break up the substring at all
    for (let i = idx; i < s.length; i++) {
      // if our dictionary has the word in range [idx, i+1], we can return minExtraCharRecursive(i + 1); otherwise we have to consider (idx + i + 1) extra characters in our calculation
      result = Math.min(
        result,
        (dictSet.has(s.slice(idx, i + 1, dp)) ? 0 : i + 1 - idx) +
          minExtraCharRecursive(i + 1, dp)
      );
    }
    dp[idx] = result;
    return result;
  }

  return minExtraCharRecursive(0);
};

console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"]));
