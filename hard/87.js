/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  let memo = {};

  function recurse(s1, s2) {
    const n = s1.length;
    if (memo[s1 + "," + s2] !== undefined) return memo[s1 + "," + s2];
    if (s1 === s2) return true;

    let result = false;
    let freqMapLeft = {};
    let freqMapRight = {};
    for (let i = 0; i < s1.length - 1; i++) {
      freqMapLeft[s1[i]] = (freqMapLeft[s1[i]] || 0) + 1;
      freqMapLeft[s2[i]] = (freqMapLeft[s2[i]] || 0) - 1;
      if (!freqMapLeft[s1[i]]) delete freqMapLeft[s1[i]];
      if (!freqMapLeft[s2[i]]) delete freqMapLeft[s2[i]];
      if (!Object.keys(freqMapLeft).length)
        result =
          result ||
          (recurse(s1.slice(0, i + 1), s2.slice(0, i + 1)) &&
            recurse(s1.slice(i + 1), s2.slice(i + 1)));

      freqMapRight[s1[i]] = (freqMapRight[s1[i]] || 0) + 1;
      freqMapRight[s2[n - 1 - i]] = (freqMapRight[s2[n - 1 - i]] || 0) - 1;
      if (!freqMapRight[s1[i]]) delete freqMapRight[s1[i]];
      if (!freqMapRight[s2[n - 1 - i]]) delete freqMapRight[s2[n - 1 - i]];
      if (!Object.keys(freqMapRight).length)
        result =
          result ||
          (recurse(s1.slice(0, i + 1), s2.slice(n - 1 - i)) &&
            recurse(s1.slice(i + 1), s2.slice(0, n - 1 - i)));

      if (result) break;
    }

    memo[s1 + "," + s2] = result;
    return result;
  }

  return recurse(s1, s2);
};

console.log(isScramble("great", "rgeat"));
