/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  function shift(c, x) {
    return String.fromCharCode(c.charCodeAt() + x);
  }

  let result = "";

  for (let i = 0; i < s.length; i++)
    if (i % 2 === 0) result += s[i];
    else result += shift(s[i - 1], parseInt(s[i]));

  return result;
};

console.log(replaceDigits("a1b2c3d4e"));
