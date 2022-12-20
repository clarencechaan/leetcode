/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let valid = {};
  for (let i = 1; i <= 26; i++) valid[i] = true;

  let possible = [valid[s[0]] ? 1 : 0];

  for (let i = 1; i < s.length; i++) {
    possible[i] =
      (valid[s[i]] ? possible[i - 1] : 0) +
      (valid[s[i - 1] + s[i]] ? possible[i - 2] || (i === 1 ? 1 : 0) : 0);
  }

  return possible.pop();
};

console.log(numDecodings("111"));
