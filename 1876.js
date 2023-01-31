/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  function isStringGood(str) {
    return str[0] !== str[1] && str[0] !== str[2] && str[1] !== str[2];
  }

  let result = 0;
  for (let i = 0; i + 3 <= s.length; i++)
    if (isStringGood(s.substring(i, i + 3))) result++;
  return result;
};

console.log(countGoodSubstrings("aababcabc"));
