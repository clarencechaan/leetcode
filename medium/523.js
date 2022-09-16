/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.some((num, idx) => num === 0 && nums[idx + 1] === 0)) return true;
  if (nums.reduce((sum, num) => sum + num, 0) < k) return false;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum && sum < k) continue;
      if (sum % k === 0) return true;
    }
  }

  return false;
};
