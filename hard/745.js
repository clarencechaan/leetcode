/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  const prefixTrie = {};
  const suffixTrie = {};

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];
    let curr = prefixTrie;
    for (const char of word) {
      if (!curr[char]) curr[char] = { indices: new Set() };
      curr[char].indices.add(idx);
      curr = curr[char];
    }

    const reverse = word.split("").reverse().join("");
    curr = suffixTrie;
    for (const char of reverse) {
      if (!curr[char]) curr[char] = { indices: [] };
      curr[char].indices.push(idx);
      curr = curr[char];
    }
  }

  this.prefixTrie = prefixTrie;
  this.suffixTrie = suffixTrie;
  this.words = words;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let pCurr = this.prefixTrie;
  for (const char of pref) pCurr = pCurr?.[char];

  suff = suff.split("").reverse().join("");
  let sCurr = this.suffixTrie;
  for (const char of suff) sCurr = sCurr?.[char];

  for (let i = sCurr?.indices.length - 1; i >= 0; i--)
    if (pCurr?.indices.has(sCurr.indices[i])) return sCurr.indices[i];

  return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
