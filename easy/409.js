/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let counts = {};
  for (const char of s)
    if (!counts[char]) counts[char] = 1;
    else counts[char]++;

  let length = 0;
  for (const char in counts) {
    length += Math.floor(counts[char] / 2) * 2;
    counts[char] -= Math.floor(counts[char] / 2) * 2;
  }

  for (const char in counts) if (counts[char] === 1) return length + 1;
  return length;
};

console.log(longestPalindrome("abbcc"));
