/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const tree = {};

  function addWordToTree(word) {
    let curr = tree;
    for (const char of word) {
      if (!curr[char]) curr[char] = { count: 0 };
      curr = curr[char];
      curr.count++;
    }
  }

  words.forEach((word) => addWordToTree(word));

  function getScore(term) {
    let score = 0;
    let curr = tree;
    for (const char of term) {
      curr = curr[char];
      score += curr.count;
    }

    return score;
  }

  return words.map(getScore);
};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
