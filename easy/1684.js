/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.reduce(
    (count, word) => count + isStringConsistent(allowed, word),
    0
  );
};

function isStringConsistent(allowed, word) {
  let chars = [];
  for (const char of word) if (!chars.includes(char)) chars.push(char);
  for (const char of chars) if (!allowed.includes(char)) return false;
  return true;
}

console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
