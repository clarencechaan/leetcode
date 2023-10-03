/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
  let freqMap = {};
  let sum = 0;
  for (let i = 0; i < k; i++) {
    freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
    sum += nums[i];
  }
  let distinct = Object.entries(freqMap).length;
  let max = 0;

  for (let i = 0; i + k <= nums.length; i++) {
    if (distinct >= m) max = Math.max(max, sum);
    freqMap[nums[i]]--;
    if (!freqMap[nums[i]]) distinct--;
    freqMap[nums[i + k]] = (freqMap[nums[i + k]] || 0) + 1;
    if (freqMap[nums[i + k]] === 1) distinct++;
    sum -= nums[i];
    sum += nums[i + k];
  }

  return max;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4));
