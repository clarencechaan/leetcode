/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let freqMap = {};
  for (const t of time) freqMap[t % 60] = (freqMap[t % 60] || 0) + 1;

  let result = 0;
  for (const t in freqMap)
    if (t == 0 || t == 30) result += ((freqMap[t] - 1) * freqMap[t]) / 2;
    else if (t < 30) result += freqMap[t] * freqMap[60 - t] || 0;
    else break;

  return result;
};

console.log(numPairsDivisibleBy60([60, 60, 60]));
