/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let result = 0;
  for (const word of words) if (s.substring(0, word.length) === word) result++;
  return result;
};

console.log(countPrefixes(["a", "a"], "aa"));
