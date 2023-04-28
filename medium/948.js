/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => (a > b ? 1 : -1));
  let score = 0;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    if (tokens[left] <= power) {
      power -= tokens[left];
      score++;
      left++;
    } else if (left !== right && score > 0) {
      power += tokens[right];
      score--;
      right--;
    } else break;
  }

  return score;
};

console.log(bagOfTokensScore([100, 200, 300, 400], 200));
