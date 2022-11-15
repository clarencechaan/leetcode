/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = null;
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += nums[i + j];
    }
    const average = sum / k;
    if (max === null || average > max) max = average;
  }
  return max;
};

console.log(findMaxAverage([5], 1));
