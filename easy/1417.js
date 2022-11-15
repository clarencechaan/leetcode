/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let result = [];
  let alpha = s.split("").filter((char) => char >= "a" && char <= "z");
  let numeric = s.split("").filter((char) => char >= "0" && char <= "9");
  if (Math.abs(alpha.length - numeric.length) <= 1) {
    if (alpha.length >= numeric.length) {
      for (let i = 0; i < alpha.length; i++) {
        if (alpha[i]) result.push(alpha[i]);
        if (numeric[i]) result.push(numeric[i]);
      }
    } else {
      for (let i = 0; i < numeric.length; i++) {
        if (numeric[i]) result.push(numeric[i]);
        if (alpha[i]) result.push(alpha[i]);
      }
    }
  }
  return result.join("");
};

console.log(reformat("abcde12345"));
