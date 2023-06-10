/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let freqMap = {};
  for (const char of s1) freqMap[char] = (freqMap[char] || 0) + 1;
  for (const char of s2) freqMap[char] = (freqMap[char] || 0) - 1;
  for (const char in freqMap) if (freqMap[char] % 2 !== 0) return -1;

  let str1 = "";
  let str2 = "";
  for (let i = 0; i < s2.length; i++)
    if (s1[i] !== s2[i]) {
      str1 += s1[i];
      str2 += s2[i];
    }

  let result = 0;
  while (str1 !== str2) {
    result++;
    let bestSwap = null;
    loop: for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) continue;
        if (i !== j && str2[i] === str2[j] && str1[i] === str1[j]) {
          bestSwap = [i, j];
          break loop;
        }
        if (!bestSwap && (str2[i] === str2[j] || str1[i] === str1[j]))
          bestSwap = [i, j];
      }
    }
    let [i, j] = bestSwap;
    let nextStr1 = "";
    let nextStr2 = "";
    for (let k = 0; k < str1.length; k++) {
      if (
        (k !== i && k !== j) ||
        (k === i && str2[j] !== str2[i]) ||
        (k === j && str1[j] !== str1[i])
      ) {
        nextStr1 += str1[k];
        nextStr2 += str2[k];
      }
    }
    str1 = nextStr1;
    str2 = nextStr2;
  }

  return result;
};

console.log(minimumSwap("xy", "yx"));
