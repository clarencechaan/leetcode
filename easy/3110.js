/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  const scores = s.split("").map((char) => char.charCodeAt());
  let result = 0;
  for (let i = 1; i < scores.length; i++)
    result += Math.abs(scores[i - 1] - scores[i]);
  return result;
};

console.log(scoreOfString("hello"));
