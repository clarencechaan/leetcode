/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let letter = word[0];
  let length = 1;
  let comp = "";

  for (let i = 1; i <= word.length; i++) {
    if (length >= 9 || word[i] !== letter) {
      comp += length + letter;
      length = 0;
    }
    letter = word[i];
    length++;
  }

  return comp;
};
