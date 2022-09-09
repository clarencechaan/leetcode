/**
 * @param {string[]} sentences
 * @return {number}
 */
// 1) convert each sentence into the number of words
// 2) return the max number of words
var mostWordsFound = function (sentences) {
  let max = 0;
  sentences
    .map((sentence) => sentence.split(" ").length)
    .forEach((sLength) => (max = sLength > max ? sLength : max));
  return max;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
