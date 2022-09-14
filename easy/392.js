/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let idx = 0;
  for (const char of t) {
    if (s[idx] === char) idx++;
  }

  return idx === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
