/**
 * @param {string[]} words
 * @return {boolean}
 */
// 1. count the total number of occurences of each letter
// 2. return true if each count is divisible by n, where n is the size of the array
var makeEqual = function (words) {
  let n = words.length;
  let counts = {};

  for (const word of words) {
    for (const char of word) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
  }

  for (const key in counts) {
    if (counts[key] % n !== 0) return false;
  }

  return true;
};

console.log(makeEqual(["abc", "aabc", "bc"]));
