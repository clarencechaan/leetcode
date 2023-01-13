/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      result += String.fromCharCode(parseInt(s[i] + s[i + 1]) + 96);
      i += 2;
    } else result += String.fromCharCode(parseInt(s[i]) + 96);
  }
  return result;
};

console.log(freqAlphabets("1326#"));
