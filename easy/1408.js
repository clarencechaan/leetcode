/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  return words.filter((a) => words.some((b) => b.includes(a) && a !== b));
};

console.log(stringMatching(["blue", "green", "bu"]));
