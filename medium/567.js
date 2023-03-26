/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let freqMap1 = {};
  for (const char of s1) freqMap1[char] = (freqMap1[char] || 0) + 1;

  let freqMap2 = {};
  for (const char of s2.substring(0, s1.length))
    freqMap2[char] = (freqMap2[char] || 0) + 1;

  function isEqualFreqMaps(fm1, fm2) {
    for (const char in fm1) if (fm1[char] !== fm2[char]) return false;
    return true;
  }

  for (let i = 0; i + s1.length <= s2.length; i++) {
    if (isEqualFreqMaps(freqMap1, freqMap2)) return true;
    freqMap2[s2[i]]--;
    freqMap2[s2[i + s1.length]] = (freqMap2[s2[i + s1.length]] || 0) + 1;
  }

  return false;
};

console.log(checkInclusion("ab", "eidboaoo"));
