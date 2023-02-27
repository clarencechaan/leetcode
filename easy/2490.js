/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++)
    if (words[i].slice(-1) !== (words[i + 1] || words[0]).slice(0, 1))
      return false;
  return true;
};

console.log(isCircularSentence("Leetcode is cool"));
