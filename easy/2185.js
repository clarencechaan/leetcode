/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let result = 0;

  for (const word of words)
    if (word.substring(0, pref.length) === pref) result++;

  return result;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
