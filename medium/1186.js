/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  const runningSum = [0];
  for (let i = 0; i < arr.length; i++)
    runningSum[i + 1] = runningSum[i] + arr[i];

  const min = [0];
  for (let i = 1; i < runningSum.length; i++)
    min[i] = Math.min(min[i - 1], runningSum[i]);

  const max = [];
  max[runningSum.length - 1] = runningSum[runningSum.length - 1];
  for (let i = runningSum.length - 2; i >= 0; i--)
    max[i] = Math.max(max[i + 1], runningSum[i]);

  let ans = -Infinity;
  for (let i = 0; i < min.length - 1; i++)
    ans = Math.max(ans, max[i + 1] - min[i]);

  function getSubarraySumStart(start) {
    return max[start + 1] - runningSum[start];
  }

  function getSubarraySumEnd(end) {
    return runningSum[end] - min[end - 1];
  }

  for (let i = 1; i < arr.length - 1; i++)
    ans = Math.max(ans, getSubarraySumEnd(i) + getSubarraySumStart(i + 1));

  return ans;
};

console.log(maximumSum([1, -2, 0, 3]));
