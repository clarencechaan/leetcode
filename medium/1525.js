/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let freqLeft = {};
  let freqRight = {};
  freqLeft[s[0]] = 1;
  for (let i = 1; i < s.length; i++)
    freqRight[s[i]] = (freqRight[s[i]] || 0) + 1;

  function isGoodSplit(freqLeft, freqRight) {
    return Object.entries(freqLeft).length === Object.entries(freqRight).length;
  }

  let result = 0;
  for (let i = 1; i < s.length; i++) {
    if (isGoodSplit(freqLeft, freqRight)) result++;
    freqLeft[s[i]] = (freqLeft[s[i]] || 0) + 1;
    freqRight[s[i]]--;
    if (!freqRight[s[i]]) delete freqRight[s[i]];
  }

  return result;
};

console.log(numSplits("aacaba"));
