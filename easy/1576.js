/**
 * @param {string} s
 * @return {string}
 */
// 1) replace each ? with the first letter in the alphabet that is not equal
//    to either neighbour
var modifyString = function (s) {
  let result = s.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "?") {
      for (const char of alphabet) {
        if (char !== result[i - 1] && char !== result[i + 1]) {
          result[i] = char;
          break;
        }
      }
    }
  }
  result = result.join("");
  return result;
};

console.log(modifyString("ubv?w"));
