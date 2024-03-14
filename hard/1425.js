/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  // idea:
  // 1. create a recursive helper function getMaxSum(idx) that returns the maximum sum
  //    of a subsequence from idx to nums.length that also contains nums[idx]
  // 2. create an array dp where dp[idx] === getMaxSum(idx)
  // 3. call getMaxSum(idx) for all idx where 0 <= idx < nums.length
  // 4. return the max value returned by this helper function
  // (too slow)

  // another idea:
  // 1. declare an array maxSum where maxSum[idx] === the maximum sum of a subsequence
  //    from idx to nums.length that also contains nums[idx]
  // 2. fill this array from back to front
  // 3. return the maximum value in maxSum
  // (still too slow)

  // declare max as an array that contains all values of maxSum.slice(i+1, i+1+k) that are >= all elements to its left

  let maxSum = [];
  maxSum[nums.length - 1] = nums[nums.length - 1];

  let max = [nums[nums.length - 1]];
  for (let i = nums.length - 2; i >= 0; i--) {
    maxSum[i] = nums[i] + Math.max(0, max[0]);
    while (max[max.length - 1] < maxSum[i]) max.pop();
    max.push(maxSum[i]);
    if (max[0] === maxSum[i + k]) max.shift();
  }

  return Math.max(...maxSum);
};

console.log(constrainedSubsetSum([10, -2, -10, -5, 20], 2));

//   0   1    2   3   4
// [10, -2, -10, -5, 20]
// [23, 13,  10, 15, 20]

// i === 3:
// max === [20]
// i === 2:
// max === [20, 15]
// i === 1:
// max === [15, 10]
// i === 0:
// max === [13]
