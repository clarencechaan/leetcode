/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let substrings = [];

  for (let i = 1; i <= s.length / 2; i++)
    if (s.length % i === 0) substrings.push(s.substring(0, i));

  for (let i = 0; i < substrings.length; i++) {
    let temp = substrings[i];
    while (substrings[i].length < s.length) substrings[i] += temp;
  }

  if (substrings.includes(s)) return true;
  return false;
};

console.log(repeatedSubstringPattern("abcabcabcabc"));
