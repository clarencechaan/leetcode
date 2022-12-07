/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let result = Array(s.length);
  for (let i = 0; i < s.length; i++) if (s[i] === c) result[i] = 0;

  let count = null;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0) count = 1;
    else if (count) {
      result[i] = count;
      count++;
    }
  }

  count = null;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === 0) count = 1;
    else if (count && (count < result[i] || !result[i])) {
      result[i] = count;
      count++;
    }
  }

  return result;
};

console.log(shortestToChar("aaba", "b"));
