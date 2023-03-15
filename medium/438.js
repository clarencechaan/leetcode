/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let freqMapP = {};
  for (const char of p) freqMapP[char] = (freqMapP[char] || 0) + 1;

  let result = [];
  let freqMapS = {};
  for (const char of s.substring(0, p.length))
    freqMapS[char] = (freqMapS[char] || 0) + 1;

  function equalFreqMap(a, b) {
    let letters = new Set();
    for (const char in a) letters.add(char);
    for (const char in b) letters.add(char);
    for (const letter of letters)
      if ((a[letter] || 0) !== (b[letter] || 0)) return false;
    return true;
  }

  for (let i = 0; i + p.length <= s.length; i++) {
    if (equalFreqMap(freqMapS, freqMapP)) result.push(i);
    freqMapS[s[i]]--;
    freqMapS[s[i + p.length]] = (freqMapS[s[i + p.length]] || 0) + 1;
  }

  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
