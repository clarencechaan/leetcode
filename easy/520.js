/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  function isCapital(char) {
    return char >= "A" && char <= "Z";
  }

  function allCapital() {
    for (const char of word) if (!isCapital(char)) return false;
    return true;
  }

  function noCapital() {
    for (const char of word) if (isCapital(char)) return false;
    return true;
  }

  function firstCapital() {
    if (!isCapital(word[0])) return false;
    for (let i = 1; i < word.length; i++) if (isCapital(word[i])) return false;
    return true;
  }

  return allCapital() || noCapital() || firstCapital();
};

console.log(detectCapitalUse("Google"));
