/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let runningSum = [0];
  let sum = 0;
  for (const card of cardPoints) {
    sum += card;
    runningSum.push(sum);
  }

  let remainingLength = cardPoints.length - k;
  let min = Infinity;
  for (let i = 0; i + remainingLength < runningSum.length; i++)
    min = Math.min(min, runningSum[i + remainingLength] - runningSum[i]);

  return sum - min;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
