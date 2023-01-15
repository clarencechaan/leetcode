/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let leftScore = s[0] === "0" ? 1 : 0;
  let rightScore = s.substring(1).replaceAll("0", "").length;
  let max = leftScore + rightScore;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "0") leftScore++;
    else rightScore--;
    max = Math.max(leftScore + rightScore, max);
  }

  return max;
};

console.log(maxScore("11100"));
