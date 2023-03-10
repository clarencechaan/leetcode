/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let count = {};
  for (const char of s)
    if (!count[char]) count[char] = 1;
    else count[char]++;
  for (const char in count) {
    if (count[char] < k) {
      let arr = s.split(char);
      let max = 0;
      for (const word of arr) max = Math.max(longestSubstring(word, k), max);
      return max;
    }
  }
  return s.length;
};

console.log(longestSubstring("deababbc", 2));

// count frequencies
// for each letter, check if count is less than k
// if it is, iterate through each maxlength substring in s that doesn't contain the letter
//    => call itself recursively on each substring, return the max
// if no letter has the count less than k, return s.length
