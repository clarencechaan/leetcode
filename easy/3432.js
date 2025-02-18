/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const runningSum = [0];
  for (let i = 0; i < nums.length; i++)
    runningSum[i + 1] = runningSum[i] + nums[i];

  let result = 0;
  for (let i = 1; i < nums.length; i++)
    if ((runningSum.at(-1) - runningSum[i] - runningSum[i]) % 2 === 0) result++;
  return result;
};
