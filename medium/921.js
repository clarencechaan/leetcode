/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  for (let i = 0; i < s.length; i++)
    if (s[i] === "(" && s[i + 1] === ")") {
      s = s.substring(0, i) + s.substring(i + 2);
      i = Math.max(-1, i - 2);
    }

  return s.length;
};

console.log(minAddToMakeValid("((("));
