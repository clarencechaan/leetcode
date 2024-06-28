/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  words = new Set(words);

  const memo = [new Map(), new Map()];
  function isConcatenated(word, isInitial = 1) {
    if (!word) return true;
    if (memo[isInitial].has(word)) return memo[isInitial].get(word);

    let result = false;
    for (let i = 1; i <= word.length - isInitial && !result; i++)
      if (words.has(word.slice(0, i)))
        result = isConcatenated(word.slice(i), 0);

    memo[isInitial].set(word, result);
    return result;
  }

  const ans = [];
  for (const word of words) if (isConcatenated(word)) ans.push(word);
  return ans;
};

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);
