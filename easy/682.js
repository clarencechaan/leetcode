/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let score = [];

  for (const char of operations)
    switch (char) {
      case "+":
        score.push(score[score.length - 1] + score[score.length - 2]);
        break;
      case "D":
        score.push(2 * score[score.length - 1]);
        break;
      case "C":
        score.pop();
        break;
      default:
        score.push(parseInt(char));
    }

  return score.reduce((sum, num) => sum + num, 0);
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
