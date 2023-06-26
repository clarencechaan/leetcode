/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let freqMap = {};
  for (const char of t) freqMap[char] = (freqMap[char] || 0) + 1;
  for (const char of s) freqMap[char] = (freqMap[char] || 0) - 1;

  let sum = 0;
  for (const char in freqMap) sum += Math.abs(freqMap[char]);
  return sum / 2;
};

console.log(minSteps("bab", "aba"));
