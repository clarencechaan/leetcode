/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let last = {};

  let max = 0;
  let count = 0;
  let seen = {};

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      count = 0;
      seen = {};
      [i, last[s[i]]] = [last[s[i]], i];
    } else {
      count++;
      max = Math.max(count, max);
      last[s[i]] = i;
      seen[s[i]] = true;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
