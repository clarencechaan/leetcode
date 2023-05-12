/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen, tries) {
  let runningSum = [0];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    runningSum.push(sum);
  }

  let firstSums = [];
  for (let i = 0; i + firstLen < runningSum.length; i++)
    firstSums[i] = runningSum[i + firstLen] - runningSum[i];

  let secondMaxes = [];
  for (let i = 0; i < firstSums.length; i++) {
    secondMaxes[i] = [];
    if (i < secondLen) secondMaxes[i][0] = 0;
    else
      secondMaxes[i][0] = Math.max(
        secondMaxes[i - 1][0],
        runningSum[i] - runningSum[i - secondLen]
      );
  }

  for (let i = firstSums.length - 1; i >= 0; i--) {
    if (firstSums.length - 1 - i < secondLen) secondMaxes[i][1] = 0;
    else
      secondMaxes[i][1] = Math.max(
        secondMaxes[i + 1][1],
        runningSum[i + firstLen + secondLen] - runningSum[i + firstLen]
      );
  }

  secondMaxes = secondMaxes.map(([max1, max2]) => Math.max(max1, max2));

  let result = 0;
  for (let i = 0; i < firstSums.length; i++)
    result = Math.max(result, firstSums[i] + secondMaxes[i]);
  return result;
};

console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
