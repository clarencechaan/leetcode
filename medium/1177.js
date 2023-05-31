/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  let freqMapLR = [{}];
  let freqMap = {};
  for (const char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
    freqMapLR.push({ ...freqMap });
  }

  function isValid(query) {
    let [left, right, k] = query;
    let substringFreqMap = { ...freqMapLR[right + 1] };
    for (const char in freqMapLR[left]) {
      substringFreqMap[char] -= freqMapLR[left][char];
      if (!substringFreqMap[char]) delete substringFreqMap[char];
    }

    let odds = 0;
    for (const char in substringFreqMap)
      if (substringFreqMap[char] % 2 === 1)
        if (odds > k * 2) return false;
        else odds++;
    return true;
  }

  return queries.map((query) => isValid(query));
};

console.log(
  canMakePaliQueries("abcda", [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ])
);
