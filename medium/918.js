/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;
  const sumAll = nums.reduce((sum, num) => sum + num, 0);

  let sum = nums[n - 1];
  let max = sum;
  let maxFromRight = [];
  maxFromRight[n - 1] = sum;
  for (let i = n - 2; i >= 0; i--) {
    sum += nums[i];
    max = Math.max(max, sum);
    maxFromRight[i] = max;
  }

  sum = nums[0];
  max = sum;
  let maxFromLeft = [sum];
  for (let i = 1; i < n; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    maxFromLeft[i] = max;
  }

  sum = 0;
  let min = 0;
  let minFromRight = [];
  for (let i = n - 1; i >= 0; i--) {
    sum += nums[i];
    min = Math.min(min, sum);
    minFromRight[i] = min;
  }

  sum = 0;
  min = 0;
  let minFromLeft = [];
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
    minFromLeft[i] = min;
  }

  max = -Infinity;
  for (let i = 0; i < n - 1; i++)
    max = Math.max(max, maxFromLeft[i] + maxFromRight[i + 1]);
  for (let i = -1; i < n - 1; i++)
    max = Math.max(
      max,
      sumAll - (minFromLeft[i] || 0) - (minFromRight[i + 2] || 0)
    );

  return max;
};

console.log(maxSubarraySumCircular([-2, -3, -1]));
