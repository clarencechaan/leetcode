/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let words = text.split(" ");

  function isWordTypable(word) {
    let typable = true;
    for (const letter of brokenLetters)
      if (word.replace(letter, "") !== word) {
        typable = false;
        break;
      }
    return typable;
  }

  let count = 0;
  for (const word of words) if (isWordTypable(word)) count++;
  return count;
};

console.log(canBeTypedWords("leet code", "e"));
