/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let result = [];
  let start = 0;
  let char = s[0];
  let count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] !== char || i === s.length) {
      if (count >= 3) result.push([start, i - 1]);
      char = s[i];
      start = i;
      count = 1;
    } else count++;
  }
  return result;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
