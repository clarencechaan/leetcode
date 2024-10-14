/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  word = word.toLowerCase();

  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  function minimum3(word) {
    return word.length >= 3;
  }

  function isDigit(char) {
    return "0" <= char && char <= "9";
  }

  function isLetter(char) {
    return "a" <= char && char <= "z";
  }

  function isVowel(char) {
    return VOWELS.has(char);
  }

  function isConsonant(char) {
    return isLetter(char) && !isVowel(char);
  }

  function onlyDigitsLetters(word) {
    for (const char of word)
      if (!isDigit(char) && !isLetter(char)) return false;
    return true;
  }

  function vowelExists(word) {
    for (const char of word) if (isVowel(char)) return true;
    return false;
  }

  function consonantExists(word) {
    for (const char of word) if (isConsonant(char)) return true;
    return false;
  }

  return (
    minimum3(word) &&
    onlyDigitsLetters(word) &&
    vowelExists(word) &&
    consonantExists(word)
  );
};

console.log(isValid("234Adas"));
