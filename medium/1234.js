/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const n = s.length;
  const target = n / 4;
  let totalFreqMap = { Q: 0, W: 0, E: 0, R: 0 };
  for (const char of s) totalFreqMap[char]++;

  const targetFreqMap = {
    Q: Math.max(totalFreqMap.Q - target, 0),
    W: Math.max(totalFreqMap.W - target, 0),
    E: Math.max(totalFreqMap.E - target, 0),
    R: Math.max(totalFreqMap.R - target, 0),
  };

  let minLength =
    targetFreqMap.Q + targetFreqMap.W + targetFreqMap.E + targetFreqMap.R;

  let freqMap;
  for (let length = minLength; length <= s.length; length++) {
    freqMap = { Q: 0, W: 0, E: 0, R: 0 };
    for (let i = 0; i < length; i++) freqMap[s[i]]++;
    for (let i = 0; i + length <= s.length; i++) {
      if (
        freqMap.Q >= targetFreqMap.Q &&
        freqMap.W >= targetFreqMap.W &&
        freqMap.E >= targetFreqMap.E &&
        freqMap.R >= targetFreqMap.R
      )
        return length;
      freqMap[s[i]]--;
      freqMap[s[i + length]]++;
    }
  }
};

console.log(balancedString("QWEREEWQ"));
