/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let letterSets = words.map((word) =>
    [...new Set(word.split(""))].sort().join("")
  );
  let result = 0;

  for (let i = 0; i < letterSets.length - 1; i++)
    for (let j = i + 1; j < letterSets.length; j++)
      if (letterSets[i] === letterSets[j]) result++;

  return result;
};

console.log(similarPairs(["nba", "cba", "dba"]));
