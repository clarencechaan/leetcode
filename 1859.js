/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let words = s.split(" ");
  let result = [];

  for (const word of words)
    result[word[word.length - 1] - 1] = word.substring(0, word.length - 1);

  result = result.join(" ");

  return result;
};

console.log(sortSentence("Myself2 Me1 I4 and3"));
