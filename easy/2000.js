/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let idx = -1;

  for (let i = 0; i < word.length; i++)
    if (word[i] === ch) {
      idx = i;
      break;
    }

  let result = "";

  for (let i = idx; i >= 0; i--) result += word[i];
  for (let i = idx + 1; i < word.length; i++) result += word[i];

  return result;
};

console.log(reversePrefix("abcd", "z"));
