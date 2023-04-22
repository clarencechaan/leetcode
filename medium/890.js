/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  function normalize(word) {
    let normalized = "";
    let val = 0;
    let map = {};
    for (const char of word) {
      if (map[char] === undefined) {
        map[char] = val;
        val++;
      }
      normalized += map[char] + ",";
    }
    return normalized;
  }

  let normalized = normalize(pattern);
  return words.filter((word) => normalize(word) === normalized);
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
