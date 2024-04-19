/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  // 1. create a running sum of numbers in `nums`
  // 2. use the running sum to calculate the k-radius average of each index

  const runningSum = [];
  for (let i = 0; i < nums.length; i++)
    runningSum[i] = (runningSum[i - 1] || 0) + nums[i];

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k || i >= nums.length - k) result[i] = -1;
    else {
      const sum = runningSum[i + k] - (runningSum[i - k - 1] || 0);
      const avg = Math.floor(sum / (k * 2 + 1));
      result[i] = avg;
    }
  }

  return result;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
