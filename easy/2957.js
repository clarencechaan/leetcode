/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1] || s[i] !== s[i + 2]) arr.push(s[i]);
  }

  return arr.reduce((str, char) => str + char, "");
};

console.log(makeFancyString("leeetcode"));
