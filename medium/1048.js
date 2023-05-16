/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => (a.length > b.length ? 1 : -1));

  function isPredecessor(wordA, wordB) {
    if (wordA.length !== wordB.length - 1) return false;
    for (let i = 0; i < wordB.length; i++)
      if (wordB.substring(0, i) + wordB.substring(i + 1) === wordA) return true;
    return false;
  }

  let map = {};
  for (const a of words) {
    map[a] = [];
    for (const b of words) {
      if (isPredecessor(a, b)) map[a].push(b);
    }
  }

  let maxMap = {};
  function wordChainLength(word = words[0]) {
    if (maxMap[word] !== undefined) return maxMap[word];
    let max = 1;
    for (const child of map[word])
      max = Math.max(max, 1 + wordChainLength(child));
    maxMap[word] = max;
    return max;
  }

  let result = 1;
  for (const word of words) result = Math.max(result, wordChainLength(word));
  return result;
};

console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
