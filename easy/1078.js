/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let words = text.split(" ");
  let result = [];

  for (let i = 2; i < words.length; i++)
    if (words[i - 2] === first && words[i - 1] === second)
      result.push(words[i]);

  return result;
};

console.log(findOcurrences("we will we will rock you", "we", "will"));
