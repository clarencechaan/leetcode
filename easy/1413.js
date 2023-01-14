/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let stepSum = 0;
  let minStepSum = 0;
  for (const num of nums) {
    stepSum += num;
    minStepSum = Math.min(stepSum, minStepSum);
  }

  return 1 - minStepSum;
};

console.log(minStartValue([1, 2]));
