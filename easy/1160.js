/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let sum = 0;
  for (const word of words) {
    if (canFormWord(word, chars)) sum += word.length;
  }
  return sum;
};

function canFormWord(word, chars) {
  let temp = chars;
  for (const char of word) {
    const idx = temp.indexOf(char);
    if (idx >= 0) temp = temp.substring(0, idx) + temp.substring(idx + 1);
    else return false;
  }
  return true;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
