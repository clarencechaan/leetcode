/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let right = 0;
  let freqMap = {};
  let freqMax = 0;

  for (; right < s.length; right++) {
    freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
    freqMax = Math.max(freqMap[s[right]], freqMax);

    if (freqMax <= right - left - k) {
      freqMap[s[left]]--;
      left++;
    }
  }

  return right - left;
};

console.log(characterReplacement("AABABBA", 1));

// find the longest substring such that one character appears (length - k) times
