/**
 * @param {string} s
 * @return {string}
 */
// ALGORITHM:
// 1) check every pair
//   1a) pair is bad => remove pair from string, move cursor to start
// 2) return string
var makeGood = function (s) {
  let result = s;

  for (let i = 0; 0 <= i && i <= result.length - 2; i++) {
    if (
      result[i].toLowerCase() === result[i + 1].toLowerCase() &&
      result[i] != result[i + 1]
    ) {
      result = result.substring(0, i) + result.substring(i + 2);
      i = -1;
    }
  }

  return result;
};

console.log(makeGood("leEeetcode"));
