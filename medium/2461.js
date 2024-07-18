/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const freq = {};
  for (let i = 0; i < k; i++) freq[nums[i]] = (freq[nums[i]] || 0) + 1;

  let distinct = Object.entries(freq).length;
  let sum = nums.slice(0, k).reduce((sum, num) => sum + num, 0);
  let max = distinct === k ? sum : 0;

  for (let i = 0; i + k < nums.length; i++) {
    freq[nums[i]]--;
    if (freq[nums[i]] === 0) distinct--;

    freq[nums[i + k]] = (freq[nums[i + k]] || 0) + 1;
    if (freq[nums[i + k]] === 1) distinct++;

    sum -= nums[i];
    sum += nums[i + k];

    if (distinct === k) max = Math.max(max, sum);
  }

  return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
