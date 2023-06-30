/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;

  let freqMap = {};
  for (const char of s) freqMap[char] = (freqMap[char] || 0) + 1;

  let odd = 0;
  for (const char in freqMap) if (freqMap[char] % 2 === 1) odd++;

  return odd <= k;
};

console.log(canConstruct("annabelle", 2));
