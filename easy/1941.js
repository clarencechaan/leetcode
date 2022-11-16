/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let occurences = {};
  for (const char of s)
    if (!occurences[char]) occurences[char] = 1;
    else occurences[char]++;
  const count = occurences[s[0]];
  for (const char in occurences) if (occurences[char] !== count) return false;
  return true;
};

console.log(areOccurrencesEqual("aaabb"));
