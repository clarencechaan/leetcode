/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  // probably need to count each character in s and t,
  //  => create a map freqS where freqS[char] === the number of times character "char" appears in s
  //  => create a map freqT where freqT[char] === the number of times character "char" appears in t

  let freqS = {};
  let freqT = {};
  for (const char of s) freqS[char] = (freqS[char] || 0) + 1;
  for (const char of t) freqT[char] = (freqT[char] || 0) + 1;

  // create a set of all characters that appear in either s or t
  let characterSet = new Set();
  for (const char of s) characterSet.add(char);
  for (const char of t) characterSet.add(char);

  // for each character "char" in characterSet, sum up the absolute difference between freqS[char] and freqT[char];
  let result = 0;
  for (const char of characterSet)
    result += Math.abs((freqS[char] || 0) - (freqT[char] || 0));

  return result;
};

console.log(minSteps("leetcode", "coats"));
