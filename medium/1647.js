/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let freqMap = {};
  for (const char of s) freqMap[char] = (freqMap[char] || 0) + 1;
  let freqArr = [];
  for (const char in freqMap) freqArr.push(freqMap[char]);
  freqArr.sort((a, b) => (a > b ? -1 : 1));

  let answer = 0;
  for (let i = 1; i < freqArr.length; i++) {
    if (freqArr[i - 1] <= freqArr[i]) {
      let subtract = Math.min(freqArr[i] - freqArr[i - 1] + 1, freqArr[i]);
      answer += subtract;
      freqArr[i] -= subtract;
    }
  }

  return answer;
};

console.log(minDeletions("aab"));
