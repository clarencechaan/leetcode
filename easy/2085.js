/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let counts = {};
  for (const word1 of words1) {
    for (const word2 of words2) {
      if (word1 === word2)
        counts[word1] = counts[word1] ? counts[word1] + 1 : 1;
    }
  }

  let once = 0;
  for (const key in counts) {
    if (counts[key] === 1) once++;
  }
  return once;
};

console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));
