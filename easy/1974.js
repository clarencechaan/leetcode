/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  function letterPosition(letter) {
    return letter.charCodeAt() - 96;
  }

  let result = word.length;
  let position = 1;

  for (const char of word) {
    const charPosition = letterPosition(char);
    const bigger = Math.max(position, charPosition);
    const smaller = Math.min(position, charPosition);
    const distance = Math.min(
      Math.abs(bigger - smaller),
      Math.abs(smaller + (26 - bigger))
    );
    result += distance;
    position = charPosition;
  }

  return result;
};

console.log(minTimeToType("bza"));
