/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  return patterns.filter((str) => word.includes(str)).length;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
