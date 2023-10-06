/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let totalSum = matchsticks.reduce((sum, val) => sum + val, 0);
  if (totalSum % 4 !== 0) return false;
  const sideLength = totalSum / 4;

  matchsticks.sort((a, b) => (a > b ? -1 : 1));

  let combinations = new Set();
  let arr = [];
  function findCombinations(idx = 0, sum = 0) {
    if (sum > sideLength) return;
    if (sum === sideLength) {
      combinations.add(arr.toString());
      return;
    }
    for (let i = idx; i < matchsticks.length; i++) {
      arr.push(matchsticks[i]);
      findCombinations(i + 1, sum + matchsticks[i]);
      arr.pop();
    }
  }

  findCombinations();
  combinations = [...combinations];
  combinations = combinations.map((str) => str.split(","));

  let msFreq = {};
  for (const m of matchsticks) msFreq[m] = (msFreq[m] || 0) + 1;

  function addToFreq(freq, combination) {
    for (const num of combination) freq[num] = (freq[num] || 0) + 1;
  }

  function deleteFromFreq(freq, combination) {
    for (const num of combination) freq[num]--;
  }

  function isFreqValid(freq) {
    for (const num in freq) if (freq[num] > msFreq[num]) return false;
    return true;
  }

  for (let i = 0; i < combinations.length; i++) {
    let freq = {};
    addToFreq(freq, combinations[i]);
    for (let j = i; j < combinations.length; j++) {
      addToFreq(freq, combinations[j]);
      if (isFreqValid(freq))
        for (let k = j; k < combinations.length; k++) {
          addToFreq(freq, combinations[k]);
          if (isFreqValid(freq))
            for (let l = k; l < combinations.length; l++) {
              addToFreq(freq, combinations[l]);
              if (isFreqValid(freq)) return true;
              deleteFromFreq(freq, combinations[l]);
            }
          deleteFromFreq(freq, combinations[k]);
        }
      deleteFromFreq(freq, combinations[j]);
    }
  }

  return false;
};

console.log(makesquare([1, 1, 2, 2, 2]));
