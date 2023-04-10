/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  s = s.toLowerCase();

  let result = [];

  function recurse(idx = 0, str = "") {
    if (idx >= s.length) {
      result.push(str);
      return;
    }

    recurse(idx + 1, str + s[idx]);
    if (s[idx] >= "a" && s[idx] <= "z")
      recurse(idx + 1, str + s[idx].toUpperCase());
  }

  recurse();
  return result;
};

console.log(letterCasePermutation("3z4"));
