/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let freq1 = {};
  let freq2 = {};
  let letters = new Set();

  for (const char of word1) {
    if (!freq1[char]) freq1[char] = 1;
    else freq1[char]++;
    letters.add(char);
  }

  for (const char of word2) {
    if (!freq2[char]) freq2[char] = 1;
    else freq2[char]++;
    letters.add(char);
  }

  for (const letter of letters)
    if (Math.abs((freq1[letter] || 0) - (freq2[letter] || 0)) > 3) return false;

  return true;
};

console.log(checkAlmostEquivalent("cccddabba", "babababab"));
