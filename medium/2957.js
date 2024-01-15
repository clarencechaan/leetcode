/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function (word) {
  function isAlmostEqual(a, b) {
    if (!a || !b) return false;
    return a === b || Math.abs(a.charCodeAt() - b.charCodeAt()) === 1;
  }

  let result = 0;
  for (let i = 1; i < word.length; i++) {
    if (isAlmostEqual(word[i - 1], word[i])) {
      result++;
      i++;
    }
  }

  return result;
};

console.log(removeAlmostEqualCharacters("aaaaa"));
