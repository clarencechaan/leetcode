/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  wordDict = new Set(wordDict);

  let memo = [];

  function recurse(idx = 0) {
    if (memo[idx]) return memo[idx];
    let possible = [];
    for (const word of wordDict)
      if (s.slice(idx) === word) possible.push([word]);

    for (let i = idx + 1; i < s.length; i++)
      if (wordDict.has(s.slice(idx, i)))
        for (const arr of recurse(i)) possible.push([s.slice(idx, i), ...arr]);

    memo[idx] = possible;
    return possible;
  }

  let result = recurse();
  result = result.map((arr) => arr.join(" "));
  return result;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
