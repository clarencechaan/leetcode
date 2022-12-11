/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const alphabet = {};
  for (let i = 0; i < order.length; i++) alphabet[order[i]] = i;

  function lexGreater(a, b) {
    for (let i = 0; i < b.length; i++)
      if (alphabet[a[i]] > alphabet[b[i]]) return true;
      else if (alphabet[a[i]] < alphabet[b[i]]) return false;
    return a.length > b.length;
  }

  for (let i = 0; i < words.length - 1; i++)
    if (lexGreater(words[i], words[i + 1])) return false;

  return true;
};

console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
