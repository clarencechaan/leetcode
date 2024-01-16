/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  function isVowel(char) {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char == "u"
    );
  }

  function isVowelString(str) {
    return isVowel(str[0]) && isVowel(str[str.length - 1]);
  }

  let vowelStrings = [];
  for (const word of words)
    if (isVowelString(word)) vowelStrings.push(1);
    else vowelStrings.push(0);

  let vowelSums = [0];
  for (const num of vowelStrings)
    vowelSums.push(vowelSums[vowelSums.length - 1] + num);

  let result = [];
  for (const [start, end] of queries)
    result.push(vowelSums[end + 1] - vowelSums[start]);
  return result;
};

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);
