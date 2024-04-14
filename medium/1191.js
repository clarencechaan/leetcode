/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
  // our maximum sub-array will look like this:
  // [...some right part of arr, ...arr (anywhere from 0 to k times), ...some left part of the array]
  // => find the max sum of (some right part of arr)
  // => find the sum of arr
  // => find the max sum of (some left part of arr)

  let rightPartSum = 0;
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i];
    rightPartSum = Math.max(rightPartSum, sum);
  }

  let leftPartSum = 0;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    leftPartSum = Math.max(leftPartSum, sum);
  }

  const arrSum = arr.reduce((sum, num) => sum + num, 0);

  const runningSum = [];
  sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    runningSum.push(sum);
    sum += arr[i];
  }

  const minRunningSum = [runningSum[0]];
  for (let i = 1; i < runningSum.length; i++)
    minRunningSum[i] = Math.min(minRunningSum[i - 1], runningSum[i]);

  const maxRunningSum = [];
  maxRunningSum[runningSum.length - 1] = runningSum[runningSum.length - 1];
  for (let i = runningSum.length - 2; i >= 0; i--)
    maxRunningSum[i] = Math.max(maxRunningSum[i + 1], runningSum[i]);

  let subarraySum = 0;
  for (let i = 1; i < maxRunningSum.length; i++)
    subarraySum = Math.max(
      subarraySum,
      maxRunningSum[i] - minRunningSum[i - 1]
    );

  let result = Math.max(rightPartSum, leftPartSum, subarraySum);
  if (k >= 2)
    result = Math.max(
      result,
      rightPartSum + arrSum * (k - 2) + leftPartSum,
      rightPartSum + leftPartSum
    );
  result %= 10 ** 9 + 7;
  return result;
};

console.log(kConcatenationMaxSum([1, 2], 3));
