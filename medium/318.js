/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  function isLettersShared(a, b) {
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < b.length; j++) if (a[i] === b[j]) return false;
    return true;
  }

  let combinations = [];
  for (let i = 0; i < words.length - 1; i++)
    for (let j = i + 1; j < words.length; j++) combinations.push([i, j]);
  combinations.sort((a, b) =>
    words[a[0]].length * words[a[1]].length >
    words[b[0]].length * words[b[1]].length
      ? -1
      : 1
  );

  for (const combination of combinations)
    if (isLettersShared(words[combination[0]], words[combination[1]]))
      return words[combination[0]].length * words[combination[1]].length;

  return 0;
};

console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
