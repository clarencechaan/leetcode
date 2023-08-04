/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  function isValidFreqMap(freqMapS, freqMapT) {
    for (const char in freqMapT)
      if ((freqMapS[char] || 0) < freqMapT[char]) return false;
    return true;
  }

  let freqMapT = {};
  for (const char of t) freqMapT[char] = (freqMapT[char] || 0) + 1;

  let min = "";
  let freqMapS = {};
  let left = 0;
  let right = 0;
  while (right <= s.length) {
    if (!isValidFreqMap(freqMapS, freqMapT)) {
      freqMapS[s[right]] = (freqMapS[s[right]] || 0) + 1;
      right++;
    } else {
      if (!min || right - left < min.length) min = s.slice(left, right);
      freqMapS[s[left]]--;
      left++;
    }
  }

  return min;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
