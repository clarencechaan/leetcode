/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  function numerical(word) {
    return parseInt(
      word
        .split("")
        .map((char) => char.charCodeAt() - 97)
        .join("")
    );
  }

  return numerical(firstWord) + numerical(secondWord) === numerical(targetWord);
};

console.log(isSumEqual("acb", "cba", "cdb"));
